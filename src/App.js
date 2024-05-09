import Header from "./Layouts/Header/header";
import Sidebar from "./Layouts/Sidebar/sidebar";
import MainSection from "./Layouts/MainSection/mainsection";
import { useState, useEffect } from "react";

function App() {
  const [showSidebar, setShowSidebar] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowSidebar(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#131313",
      }}
    >
      <Header />
      <div style={{ display: "flex" }}>
        {showSidebar ? (
          <div
            style={{
              width: "25%",
              backgroundColor: "#131313",
              float: "left",
            }}
          >
            <Sidebar />
          </div>
        ) : null}
        <div
          style={{
            width: showSidebar ? "75%" : "100%", // Width when sidebar is shown or hidden
            backgroundColor: "#131313",
          }}
        >
          <MainSection />
        </div>
      </div>
    </div>
  );
}

export default App;
