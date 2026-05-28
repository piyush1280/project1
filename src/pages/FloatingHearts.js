import React from "react";

function FloatingHearts() {
  return (
    <div className="hearts-container">
      {[...Array(20)].map((_, i) => (
        <span key={i} className="heart">
          ❤️
        </span>
      ))}
    </div>
  );
}

export default FloatingHearts;