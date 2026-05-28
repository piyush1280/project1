import React from "react";
import { useNavigate } from "react-router-dom";

import image1 from "../Assets/image1.webp";
import image2 from "../Assets/image2.webp";
import image3 from "../Assets/image3.jpg";
import images from "../Assets/images.jpg";

function GalleryPage() {
  const navigate = useNavigate();

  const cards = [
    { image: image1, caption: "First smile together" },
    { image: image2, caption: "Our special date" },
    { image: image3, caption: "Sweet moments" },
    { image: images, caption: "Beautiful memories" }
  ];

  return (
    <div className="gallery-page">
      <h1>Our Beautiful Memories 📸</h1>

      <div className="gallery-grid">
        {cards.map((item, index) => (
          <div className="gallery-card" key={index}>
            <img src={item.image} alt={item.caption} />
            <p>{item.caption}</p>
          </div>
        ))}
      </div>

      <button onClick={() => navigate("/letter")}> 
        Continue
      </button>
    </div>
  );
}

export default GalleryPage;