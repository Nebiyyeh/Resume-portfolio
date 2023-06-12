import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomButton from "../button/Button";
import resumeData from "../../utils/resumeData";
import TelegramIcon from "@mui/icons-material/Telegram";
import HomeIcon from "@mui/icons-material/Home";
import "./Header.css";

const Header = (props) => {

  function gotoContact() {
    const element = document.getElementById("contactUs");
    if (element != null) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      alert("Please Go to Resume Page and Click Again");
    }
  }

  const pathName = props?.location?.pathName;

  return (
    <Navbar expand="lg" sticky="top" className="header">
      <Nav.Link href="/" className="header_navlink">
        <Navbar.Brand className="hearder_home">
          <HomeIcon />
        </Navbar.Brand>
      </Nav.Link>

      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="header_left">
          <Nav.Link
            href="/"
            className={pathName === "/" ? "header_link_active" : "header_link"}
          >
            RESUME
          </Nav.Link>

          <Nav.Link
            href="/portfolio"
            className={
              pathName === "/portfolio" ? "header_link_active" : "header_link"
            }
          >
            PORTFOLIO
          </Nav.Link>
        </Nav>

        <div className="header_right">
          {Object.keys(resumeData.socials).map((key) => (
            <a
              key={resumeData.socials[key].id}
              href={resumeData.socials[key].link}
              target="_blank"
              rel="noreferrer"
            >
              {resumeData.socials[key].icon}
            </a>
          ))}

          <CustomButton
            text={"Contact me"}
            icon={<TelegramIcon />}
            onClickMe={gotoContact}
          />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
