import { useState } from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import ChatIcon from "@mui/icons-material/Chat";
import GroupIcon from "@mui/icons-material/Group";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const StyledHeader = styled.header`
  background-color: #252525;
  color: white;
  width: 100%;
  padding: 10px 12px 8px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .nav_logo {
    padding: 0 12px;

    .nav_logo_span {
      background-color: #d2295d;
      padding-inline: 6px;
      border-radius: 5px;
    }
  }

  .menuToggleBtn {
    display: none;
    color: white;
    font-size: 24px;
    position: absolute;
    right: 20px;
    top: 15px;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    .menuToggleBtn {
      display: block;
    }
  }
`;
const NavManu = styled.ul`
  list-style: none;
  display: flex;

  li {
    &:hover {
      cursor: pointer;
      background: #d2295d;
      border-radius: 4px;
    }
  }
  .nav-menu-list {
    text-decoration: none;
    color: white;
    display: flex;
    align-items: center;
    padding: 5px 10px;
  }
  @media screen and (max-width: 768px) {
    display: ${(props) => (props.isToggleOpen ? "block" : "none")};
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 5px;
  }
`;

const Header = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const handleToggleOpen = () => {
    setIsToggleOpen(!isToggleOpen);
  };
  return (
    <>
      <StyledHeader>
        <div className="nav_logo">
          secret <span className="nav_logo_span">desires</span>
          <p style={{ margin: "0px", color: "#96866e" }}>open beta</p>
        </div>

        <NavManu isToggleOpen={isToggleOpen}>
          <li className="nav-menu-list">
            {" "}
            <ChatIcon /> Chat{" "}
          </li>
          <li className="nav-menu-list">
            {" "}
            <GroupIcon />
            My Characters
          </li>
          <li className="nav-menu-list">
            {" "}
            <CameraAltIcon /> Generate Images
          </li>
          <li
            style={{ backgroundColor: "#d2295d", borderRadius: "8px" }}
            className="nav-menu-list"
          >
            {" "}
            <FavoriteIcon />
            Create Character
          </li>
        </NavManu>

        <NavManu style={{ marginRight: "20px" }} isToggleOpen={isToggleOpen}>
          <AccountCircleIcon />
          My profile
          <ArrowDropDownIcon />
        </NavManu>

        <FaBars className="menuToggleBtn" onClick={handleToggleOpen} />
      </StyledHeader>
    </>
  );
};

export default Header;
