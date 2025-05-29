import React from "react";
import img4 from '../assets/gallery.jpg'

const Gallery = () => {
  return (
    <div className="min-h-screen bg-[#f4f0e8] flex justify-center items-center p-4">
      <img
        src={img4}
        alt="Gallery Display"
        className="max-w-full h-auto rounded-lg shadow-lg"
      />
    </div>
  );
};

export default Gallery;
