import React from "react";
import { useNavigate } from "react-router-dom";

import image1 from "../Assets/image1.webp";
import image2 from "../Assets/image2.webp";
import image3 from "../Assets/image3.jpg";
import images from "../Assets/images.jpg";

function TimelinePage() {
  const navigate = useNavigate();

  const memories = [
    { title: "First Meeting ❤️", image: image1 },
    { title: "First Chat 💬", image: image2 },
    { title: "First Date 🌸", image: image3 },
    { title: "Best Memory ✨", image: images }
  ];

  return (
    <div className="timeline-page">
      <h1>Our Journey Together</h1>

      <div className="timeline">
        {memories.map((item, index) => (
          <div className="timeline-item" key={index}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>

      <button onClick={() => navigate("/music")}>
        Continue
      </button>
    </div>
  );
}

export default TimelinePage;