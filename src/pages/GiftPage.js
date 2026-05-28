import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function GiftPage() {
  const navigate = useNavigate();

  return (
    <motion.div className="page" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="glass-card gift-card">
        <h1>Your Special Gift 🎁</h1>

        <p>
        Happy Birthday, My Love ❤️

Today is not just your birthday… it’s the day the world received the most beautiful soul.
You came into my life like a dream and turned every ordinary moment into something magical.

Your smile is my favorite place, your voice is my comfort, and your love is the most precious gift I’ve ever received.
No matter how many birthdays come and go, my love for you will only grow stronger with time.

I may not always find the perfect words, but I hope you always feel how deeply you are loved, valued, and cherished.

On your special day, I just want to promise one thing —
I’ll always stand beside you, make you smile, protect your heart, and love you endlessly.

May your life be filled with happiness, success, peace, and all the beautiful things you truly deserve.

Happy Birthday once again, my forever favorite person 💖✨
        </p>

        <button onClick={() => navigate("/final")}>See the Finale</button>
      </div>
    </motion.div>
  );
}

export default GiftPage;
