import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import WelcomePage from "./pages/WelcomePage";
import GalleryPage from "./pages/GalleryPage";
import LoveLetterPage from "./pages/LoveLetterPage";
import TimelinePage from "./pages/TimelinePage";
import MusicPage from "./pages/MusicPage";
import GiftPage from "./pages/GiftPage";
import FinalPage from "./pages/FinalPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/letter" element={<LoveLetterPage />} />
        <Route path="/timeline" element={<TimelinePage />} />
        <Route path="/music" element={<MusicPage />} />
        <Route path="/gift" element={<GiftPage />} />
        <Route path="/final" element={<FinalPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;