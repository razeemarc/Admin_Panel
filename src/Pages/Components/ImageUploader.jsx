import React, { useState } from 'react';
import { imageDb, ref } from '../../firebase'; // Updated import statement
import { uploadBytes } from 'firebase/storage';

function ImageUploader() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
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
    }).catch((error) => {
      console.error("Error uploading image:", error);
    });
  };
  

  return (
    <div style={{ marginLeft: '199px',marginTop:"40px" }}>
      <input type="file" onChange={handleImageChange} accept="image/*" />
      {selectedImage && (
        <div>
          <img src={URL.createObjectURL(selectedImage)} alt="Selected" style={{ maxWidth: '100%', maxHeight: '200px' }} />
          <button onClick={handleUpload}>Upload</button>
        </div>
      )}
    </div>
  );
}

export default ImageUploader;