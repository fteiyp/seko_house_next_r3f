import React, { useRef } from "react";
import Navbar from "./Navbar";
import Cursor from "./Cursor";

const Layout = ({ children, router }) => {
  // Stuff for cursor
  // const xRef = useRef(null);
  // const yRef = useRef(null);
  // const handleMouseMove = (event) => {
  //   xRef.current = event.screenX;
  //   yRef.current = event.screenY;
  //   console.log(xRef.current);
  // };

  return (
    // <div onMouseMove={handleMouseMove}>
    <div>
      {/* <Cursor key={router.route} xRef={xRef} yRef={yRef} /> */}
      <div className="bg-black text-white">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
