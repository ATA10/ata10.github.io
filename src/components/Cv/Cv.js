import React from "react";
import { ContactWrapper } from "./CvElements";
import { MdDownload } from "react-icons/md";
import { IconButton } from "@mui/material";

import ScrollAnimation from "react-animate-on-scroll";

function Contact() {
  const downloadPdf = () => {
    window.open("https://drive.google.com/uc?export=download&id=1b3uaZn8b3-_0FLvNwHdCvgfa877eM6B2", "_blank");
  };
  
  return (
    <ContactWrapper id="Cv">
      <div className="Container">
        <div className="SectionTitle">CV is here!</div>
        <ScrollAnimation animateIn="fadeIn">
          <div className="BigCard">
            <div style={{ display: "flex", alignItems: "center", columnGap: "20px", rowGap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
              <span>CV</span>
              <IconButton onClick={downloadPdf}>
                <MdDownload size={55} style={{ cursor: "pointer", color: "#151418" }} />
              </IconButton>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </ContactWrapper>
  );
}

export default Contact;
