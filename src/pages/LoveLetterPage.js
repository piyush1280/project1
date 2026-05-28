import React from "react";
import { useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

function LoveLetterPage() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="glass-card letter-card">
        <h1>My Love  💌</h1>

        <p>
          <Typewriter
            words={[
              "You are the reason behind my happiness, my peace and my smile..."
            ]}
            loop={1}
            cursor
            typeSpeed={60}
          />
        </p>

        <button onClick={() => navigate("/timeline")}>
          Next
        </button>
      </div>
    </div>
  );
}

export default LoveLetterPage;