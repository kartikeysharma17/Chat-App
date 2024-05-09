import React from "react";
import ImageContent from "./components/ImageContent/imageContent";
import About from "./components/About/about";

const Sidebar = ({ toggleSidebar }) => {
  return (
    <>
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ImageContent toggleSidebar={toggleSidebar} />
        <About />
      </div>
    </>
  );
};

export default Sidebar;
