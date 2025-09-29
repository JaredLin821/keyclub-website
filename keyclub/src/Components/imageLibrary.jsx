import React from 'react';

const images = import.meta.glob('../kcimages/*.{jpg,png,jpeg,svg,JPG,JPEG}', { eager: true });

export default function Gallery() {
  // Return an array of image paths instead of a React component
  return Object.values(images).map(img => img.default);
}
