import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FaExchangeAlt } from 'react-icons/fa'; // Importing flip icon
import './Home.css';

const Home = () => {
  const [fromFormat, setFromFormat] = useState('PNG');
  const [toFormat, setToFormat] = useState('JPG');
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [oldFileName, setOldFileName] = useState('');
  const [newFileName, setNewFileName] = useState('');

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setImage(file);
    setPreviewUrl(URL.createObjectURL(file));
    setOldFileName(file.name.split('.')[0]);
    setNewFileName(file.name.split('.')[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: '.png, .jpg, .jpeg, .gif, .bmp',
  });

  const handleFormatChange = (event, type) => {
    if (type === 'from') {
      setFromFormat(event.target.value);
    } else {
      setToFormat(event.target.value);
    }
  };

  const handleConvert = () => {
    console.log(`Converting from ${fromFormat} to ${toFormat}`);
  };

  const handleFlip = () => {
    setFromFormat(toFormat);
    setToFormat(fromFormat);
  };

  return (
    <div className="home-container">
      <div className="image-format">
        <h1>Select Image Formats</h1>
        <div className="format-selection">
          <div className="dropdown-container">
            <label>From Format:</label>
            <select
              value={fromFormat}
              onChange={(e) => handleFormatChange(e, 'from')}
              className="format-dropdown"
            >
              <option value="PNG">PNG</option>
              <option value="JPG">JPG</option>
              <option value="JPEG">JPEG</option>
              <option value="GIF">GIF</option>
              <option value="BMP">BMP</option>
            </select>
          </div>

          <FaExchangeAlt className="flip-icon" onClick={handleFlip} />

          <div className="dropdown-container">
            <label>To Format:</label>
            <select
              value={toFormat}
              onChange={(e) => handleFormatChange(e, 'to')}
              className="format-dropdown"
            >
              <option value="PNG">PNG</option>
              <option value="JPG">JPG</option>
              <option value="JPEG">JPEG</option>
              <option value="GIF">GIF</option>
              <option value="BMP">BMP</option>
            </select>
          </div>
        </div>
      </div>

      <div className="upload-container">
        {image && (
          <div className="file-name">
            <p>File: {oldFileName}.{toFormat.toLowerCase()}</p>
          </div>
        )}

      <div
        className="dropzone"
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        {image ? (
          <img src={previewUrl} alt="preview" className="image-preview" />
        ) : (
          <p>Drag & drop an image here, or click to select one</p>
        )}
      </div>

      {image && (
          <div className="file-name-input">
            <label>Change File Name:</label>
            <div className="input-wrapper">
              <input
                type="text"
                value={newFileName}
                onChange={(e) => setNewFileName(e.target.value)}
                placeholder="Enter new file name"
              />
              <p>.{toFormat.toLowerCase()}</p>
            </div>
          </div>
        )}
      </div>

      <button className="convert-btn" onClick={handleConvert}>
        Convert
      </button>
    </div>
  );
};

export default Home;
