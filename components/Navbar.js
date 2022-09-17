import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpotify,
  faSoundcloud,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-around items-center h-16">
      <div className="flex uppercase">
        <Link href="/music">Music</Link>
        <Link href="/about">About</Link>
        <Link href="/shows">Shows</Link>
      </div>
      <Link href="/">
        <span className="text-3xl">Seko House</span>
      </Link>
      <div className="flex">
        <a href="https://open.spotify.com/artist/1uzEmG1cUynJOjJi0LTNvf?si=oAbhsZjlSWyIlyLOLGQEbw&nd=1">
          <FontAwesomeIcon
            icon={faSpotify}
            className="h-7 mr-4 sm:h-8 sm:mr-4 transition hover:text-blue-200 duration-200"
          />
        </a>
        <a href="https://soundcloud.com/sekohouse">
          <FontAwesomeIcon
            icon={faSoundcloud}
            className="h-7 mr-4 sm:h-8 sm:mr-4 transition hover:text-blue-200 duration-200"
          />
        </a>
        <a href="https://music.apple.com/us/artist/seko-house/1508862567">
          <FontAwesomeIcon
            icon={faMusic}
            className="h-7 mr-4 sm:h-8 sm:mr-4 transition hover:text-blue-200 duration-200"
          />
        </a>
        <a href="https://www.youtube.com/channel/UC6gcYLm_69Zdlq9LpZNFGrg/featured">
          <FontAwesomeIcon
            icon={faYoutube}
            className="h-7 mr-4 sm:h-8 sm:mr-4 transition hover:text-blue-200 duration-200"
          />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
