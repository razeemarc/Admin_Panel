import React, { useState } from 'react';

function ImageUploader() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleUpload = () => {
    // Logic for uploading the image
    console.log("Uploading image:", selectedImage);
    // Reset selected image after upload
    setSelectedImage(null);
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
