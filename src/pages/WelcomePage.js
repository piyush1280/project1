import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function WelcomePage() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="glass-card">
        <h1>Welcome My Love 💖</h1>

        <p>
          Today is all about your smile, happiness and beautiful soul.
        </p>

        <button onClick={() => navigate("/gallery")}>
          Next Surprise
        </button>
      </div>
    </motion.div>
  );
}

export default WelcomePage;