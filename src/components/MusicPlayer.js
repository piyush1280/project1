import React, { useState } from "react";

function MusicPlayer() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="music-player">
      <p>
        A romantic atmosphere is ready. Press play to imagine your favorite song.
      </p>
      <button onClick={() => setPlaying((value) => !value)}>
        {playing ? "Pause Music" : "Play Romantic Music"}
      </button>
      {playing && <p className="playing-text">Music is playing in your heart... 🎶</p>}
    </div>
  );
}

export default MusicPlayer;
