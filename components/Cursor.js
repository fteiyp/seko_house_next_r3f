import { useState, useEffect } from "react";
import classNames from "classnames";

const isMobile = () => {
  const ua = navigator.userAgent;
  return /Android|Mobi/i.test(ua);
};

const Cursor = ({ xRef, yRef }) => {
  const [position, setPosition] = useState({
    x: xRef.current,
    y: yRef.current - 100,
  });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [videoHovered, setVideoHovered] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    addEventListeners();
    handleLinkHoverEvents();
    return () => removeEventListeners();
  }, []);

  const addEventListeners = () => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
  };

  const removeEventListeners = () => {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseenter", onMouseEnter);
    document.removeEventListener("mouseleave", onMouseLeave);
    document.removeEventListener("mousedown", onMouseDown);
    document.removeEventListener("mouseup", onMouseUp);
  };

  const onMouseMove = (e) => {
    // setPosition({ x: e.clientX, y: e.clientY });
    setPosition({ x: xRef.current, y: yRef.current - 100 }); // why is this offset 100px on y axis...
  };
  const onMouseDown = () => {
    setClicked(true);
  };
  const onMouseUp = () => {
    setClicked(false);
  };
  const onMouseLeave = () => {
    setHidden(true);
  };
  const onMouseEnter = () => {
    setHidden(false);
  };

  const handleLinkHoverEvents = () => {
    ["a", "h1"].forEach((tag) => {
      document.querySelectorAll(tag).forEach((el) => {
        el.addEventListener("mouseover", () => setLinkHovered(true));
        el.addEventListener("mouseout", () => setLinkHovered(false));
      });
    });

    document.querySelectorAll("video").forEach((el) => {
      el.addEventListener("mouseover", () => setVideoHovered(true));
      el.addEventListener("mouseout", () => setVideoHovered(false));
    });
  };

  const cursorClasses = classNames("cursor", {
    "cursor--clicked": clicked,
    "cursor--hidden": hidden,
    "cursor--link-hovered": linkHovered,
    "cursor--video-hovered": videoHovered,
  });

  if (typeof navigator !== "undefined" && isMobile()) return null;

  return (
    <div
      className={cursorClasses}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
};

export default Cursor;
