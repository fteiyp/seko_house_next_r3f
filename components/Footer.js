import React from "react";

const Footer = () => {
  return (
    <footer className="w-full h-40 grid grid-cols-3">
      <div className="flex items-center justify-center">
        <a href="https://www.instagram.com/seko_house/?hl=en">INSTAGRAM</a>
      </div>
      <div className="flex items-center justify-center">
        <a href="https://open.spotify.com/artist/1uzEmG1cUynJOjJi0LTNvf?si=oAbhsZjlSWyIlyLOLGQEbw&nd=1">
          SPOTIFY
        </a>
      </div>
      <div className="flex items-center justify-center">
        <a href="https://soundcloud.com/sekohouse">SOUNDCLOUD</a>
      </div>
    </footer>
  );
};

export default Footer;
