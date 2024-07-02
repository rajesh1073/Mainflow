import React, { useState } from 'react';
import ImageItem from './ImageItem';
import Modal from './Modal';
import './Gallery.css';

const images = [
  // Add URLs of your images here
  '1.png',
  '2.png',
  '3.png',
  '4.png',
  '5.png',
  '6.png',
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImages = (direction) => {
    const currentIndex = images.indexOf(selectedImage);
    const newIndex = (currentIndex + direction + images.length) % images.length;
    setSelectedImage(images[newIndex]);
  };

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <ImageItem key={index} src={image} onClick={() => openModal(image)} />
      ))}
      {selectedImage && (
        <Modal
          src={selectedImage}
          onClose={closeModal}
          onNavigate={navigateImages}
        />
      )}
    </div>
  );
};

export default Gallery;