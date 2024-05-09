import { React, useEffect, useState } from "react";
import EditNoteIcon from "@mui/icons-material/EditNote";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";

const About = () => {
  return (
    <>
      <div
        className=""
        style={{
          height: "100%",
          backgroundColor: "#6d1932",
          color: "white",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            backgroundColor: "#252525",
            padding: "10px",
            width: "90%",
            marginInline: "auto",
            marginTop: "15px",
            borderRadius: "10px",
            justifyContent: "space-between",
            fontSize: "10px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "8px",
              }}
            >
              <CameraAltIcon style={{ fontSize: "16px" }} />
              <span>0</span>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <ChatBubbleOutlineRoundedIcon style={{ fontSize: "16px" }} />
              <span>6</span>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "8px",
              }}
            >
              <LockRoundedIcon
                style={{ fontSize: "16px", marginRight: "4px" }}
              />

              <span>Make Character Public</span>
            </div>
            <ShareRoundedIcon style={{ fontSize: "16px" }} />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            backgroundColor: "#252525",
            padding: "10px",
            width: "90%",
            height: "83.8%",
            marginInline: "auto",
            marginTop: "15px",
            borderRadius: "10px 10px 0 0",
            justifyContent: "space-between",
            fontSize: "10px",
          }}
        >
          <div style={{ fontSize: "14px", width: "40%" }}>
            <h2>Who I Am</h2>
            <div>
              <h3>Personality</h3>
              <p>Caregiver</p>
            </div>
            <div>
              <h3>Work</h3>
              <p>Yoga Instructor</p>
            </div>
            <div>
              <h3>Hobbies</h3>
              <p>Anime Fan</p>
            </div>
            <div>
              <h3>Relationship</h3>
              <p>Friend</p>
            </div>
          </div>
          <div style={{ fontSize: "12px", width: "60%" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <h2>About Me</h2>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <EditNoteIcon />
              </div>
            </div>

            <p style={{ fontSize: "16px" }}>
              21-Year-old anime fanatic and yoga instructor. I binge-watch
              anime! Looking for someone to join me in downwarddog and anime
              marathons. Fun fact: I can recite The entire script of my favorite
              anime movie from memory. Let's chatt
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
