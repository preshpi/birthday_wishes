// src/components/Layout.jsx
import { Outlet } from "react-router-dom";
import { useEffect, useRef } from "react";
import { audio as birthday } from "../src/assets";

const Layout = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch(() => {}); // ignore autoplay error
      }
      document.removeEventListener("click", playAudio);
    };

    document.addEventListener("click", playAudio);
  }, []);

  return (
    <>
      <audio ref={audioRef} src={birthday} loop />
      <Outlet />
    </>
  );
};

export default Layout;
