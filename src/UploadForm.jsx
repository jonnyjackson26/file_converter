import React, { useState } from 'react';

function UploadForm({ onConvert }) {
  const [image, setImage] = useState(null);
  const [format, setFormat] = useState('jpg'); // Default to JPG

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleFormatChange = (e) => {
    setFormat(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (image) {
      onConvert(image, format); // Call onConvert function passed from App.js
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Upload Image:</label>
        <input type="file" accept="image/*" onChange={handleFileChange} />
      </div>
      <div>
        <label>Convert to:</label>
        <select value={format} onChange={handleFormatChange}>
          <option value="jpg">JPG</option>
          <option value="png">PNG</option>
        </select>
      </div>
      <button type="submit">Convert</button>
    </form>
  );
}

export default UploadForm;
