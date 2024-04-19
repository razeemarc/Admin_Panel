import React, { useState, useEffect, useRef } from 'react';
import { imageDb, ref, listAll, deleteObject } from '../../firebase'; // Updated import statement
import { uploadBytes, getDownloadURL } from 'firebase/storage';
import { Button, Card, Modal } from 'react-bootstrap';
import { AiOutlineClose } from 'react-icons/ai'; // Import close icon

function ImageUploader() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    // Fetch and display stored images on mount
    fetchAndDisplayImages();
  }, []);

  const fetchAndDisplayImages = async () => {
    try {
      const storageRef = ref(imageDb, 'Chitharal');
      const fileList = await listAll(storageRef);
      const imageUrls = await Promise.all(fileList.items.map(async (item) => {
        const url = await getDownloadURL(item);
        return { url, ref: item };
      }));
      setImages(imageUrls);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
    setShowModal(true); // Show modal when image is selected
  };

  const handleUpload = () => {
    if (!selectedImage) {
      console.error("No image selected.");
      return;
    }

    const storageRef = ref(imageDb, 'Chitharal/' + selectedImage.name);
    const uploadTask = uploadBytes(storageRef, selectedImage);

    uploadTask.then((snapshot) => {
      console.log("Image uploaded successfully:", snapshot);
      setSelectedImage(null); // Reset selected image after upload
      fetchAndDisplayImages(); // Update displayed images after upload
      setShowModal(false); // Close the modal after upload
    }).catch((error) => {
      console.error("Error uploading image:", error);
    });
  };

  const handleRemove = async (imageRef) => {
    try {
      await deleteObject(imageRef);
      console.log("Image removed successfully");
      fetchAndDisplayImages(); // Update displayed images after removal
    } catch (error) {
      console.error("Error removing image:", error);
    }
  };

  const openFileDialog = () => {
    fileInputRef.current.click();
  };

  return (
    <div style={{ marginLeft: '199px', marginTop: "40px", display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
     
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        
        {images.map((image, index) => (
          <Card key={index} style={{ width: '200px', height: '250px', marginBottom: '10px', marginRight: '10px', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span style={{ position: 'absolute', top: '5px', right: '5px', cursor: 'pointer' }} onClick={() => handleRemove(image.ref)}>
              <AiOutlineClose />
            </span>
            <Card.Img variant="top" src={image.url} style={{ maxHeight: '200px', alignSelf: 'center' }} />
          </Card>
        ))}
      </div>
      <div>
        <input ref={fileInputRef} type="file" onChange={handleImageChange} accept="image/*" style={{ display: 'none' }} />
      </div>
      <div style={{ position: 'fixed', bottom: '20px', left: '60%', transform: 'translateX(-50%)' }}>
  <Button variant="primary" onClick={openFileDialog} style={{ height: '38px', lineHeight: '1' }}>Upload Image</Button>
</div>

      
      {/* Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
  <Modal.Header closeButton>
    <Modal.Title style={{ textAlign: 'center', width: '100%' }}>Selected Image</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    {selectedImage && (
      <div style={{ textAlign: 'center' }}>
        <img
          src={URL.createObjectURL(selectedImage)}
          alt="Selected"
          style={{ maxWidth: '100%', maxHeight: '200px', display: 'block', margin: 'auto' }}
        />
        
      </div>
    )}
    <div style={{ position: 'fixed', bottom: '250px', left: '600px' }}>
      <Button variant="primary" onClick={handleUpload}>Upload</Button>
    </div>
  </Modal.Body>
</Modal>

    </div>
  );
}

export default ImageUploader;
