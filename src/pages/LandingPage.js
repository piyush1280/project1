import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import FloatingHearts from "../components/FloatingHearts";
import ThreeBackground from "../components/ThreeBackground";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <ThreeBackground />
      <FloatingHearts />

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <h1>Happy Birthday ❤️</h1>

        <p>
          You are the most beautiful part of my life ✨
        </p>

        <button onClick={() => navigate("/welcome")}>
          Open Surprise
        </button>
      </motion.div>
    </div>
  );
}

export default LandingPage;