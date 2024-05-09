import React from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SettingsIcon from "@mui/icons-material/Settings";
import CloseIcon from "@mui/icons-material/Close";
import Img from "../../../../Assets/images/sidebarimg.png";
import EditNoteIcon from "@mui/icons-material/EditNote";

const ImageContent = ({ toggleSidebar }) => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#252525",
          color: "white",
          padding: "10px",
          borderRadius: "5px",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "10px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <ChevronLeftIcon />
            <div style={{ marginLeft: "5px" }}>
              chats img : <span>3</span>
            </div>
            <div style={{ marginLeft: "15px" }}>msg:</div>
          </div>
          <div style={{ display: "flex", gap: "5px" }}>
            <MoreVertIcon />
            <SettingsIcon />
            <EditNoteIcon />
            <div onClick={toggleSidebar}>
              <CloseIcon />
            </div>
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <img style={{ maxWidth: "100%", height: "auto" }} src={Img} alt="" />
        </div>
      </div>
    </>
  );
};

export default ImageContent;
