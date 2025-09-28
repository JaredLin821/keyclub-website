import React from 'react';

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('./kcimages', false, /\.(png|jpe?g|svg)$/));

export default function Gallery() {
  return (
    <div>
      {images.map((img, i) => (
        <img key={i} src={img} alt={`pic-${i}`} />
      ))}
    </div>
  );
}