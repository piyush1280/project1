import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function FinalPage() {
  const navigate = useNavigate();

  return (
    <motion.div className="page" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="glass-card final-card">
        <h1>Forever With You 💞</h1>

        <p>
          Thank you for being the light of my life. Happy birthday, You are the most beautiful part of my life, the reason behind my smile and happiness. Every moment with you feels magical. I’m truly lucky to have someone as special as you. May your day be filled with endless love, joy, laughter, and unforgettable memories forever ✨.
        </p>

        <button onClick={() => navigate("/")}>Back to Start</button>
      </div>
    </motion.div>
  );
}

export default FinalPage;
