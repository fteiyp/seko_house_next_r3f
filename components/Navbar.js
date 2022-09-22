import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpotify,
  faSoundcloud,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { motion } from "framer-motion";

const SocialLinks = () => {
  return (
    <div className="flex">
      <a href="https://www.instagram.com/seko_house/?hl=en">
        <FontAwesomeIcon
          icon={faInstagram}
          className="h-7 mr-4 sm:h-8 sm:mr-4 transition hover:text-blue-200 duration-200"
        />
      </a>
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
  );
};

const Tabs = () => {
  return (
    <div className="flex uppercase">
      <span className="mr-4">
        <Link href="/">Home</Link>
      </span>
      <span className="mr-4">
        <Link href="/music">Music</Link>
      </span>
      <span className="mr-4">
        <Link href="/merch">Merch</Link>
      </span>
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="flex justify-around items-center h-36">
      <Tabs />
      <Link href="/">
        <span className="text-8xl font-['Chromate'] text-outline cursor-default">
          Seko House
        </span>
      </Link>
      <SocialLinks />
    </div>
  );
};

export default Navbar;
