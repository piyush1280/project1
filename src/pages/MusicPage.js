import React from "react";
import { useNavigate } from "react-router-dom";
import MusicPlayer from "../components/MusicPlayer";

function MusicPage() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <h1>Music For You 🎶</h1>

      <MusicPlayer />

      <button onClick={() => navigate("/gift")}>
        Open Gift
      </button>
    </div>
  );
}

export default MusicPage;