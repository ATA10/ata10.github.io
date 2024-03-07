import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src="/krktr.png"
            alt="karakter"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            Hello! My name is <strong>Anıl Taha ADAK</strong>. I am a professional focusing on embedded systems, 
            artificial intelligence and computer engineering. I have a deep interest and passion for rapid developments in information technologies.
            </ScrollAnimation>

            <br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            My journey into the world of technology began with my strong passion for problem solving, which led me to the Computer Systems Technology program. 
            Despite the challenges, I remained determined and formed lasting friendships that supported me throughout this challenging program. 
            During my education at Balıkesir University, I had the opportunity to take part in fascinating projects. 
            I contributed to the development of projects that were appreciated by my colleagues, instructors and customers.
              <div className="tagline2">
              Working collaboratively within a team towards a common goal has been an incredibly rewarding and unique experience for me.
              </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeInLeft">
            It's exciting for me to follow innovations in artificial intelligence and apply these technologies to real-world problems. 
            My strong programming skills and analytical thinking enable me to work effectively and solution-oriented on projects.
            </ScrollAnimation>

            <br />

            <ScrollAnimation animateIn="fadeInLeft">
            My experience with embedded systems strengthens my ability to optimize the integration of hardware and software. 
            The successes I have achieved in projects in this field motivate me to direct more complex and innovative projects in the future.
            </ScrollAnimation>

            <br />

            <ScrollAnimation animateIn="fadeInLeft">
            My interest in web development and cross-platform mobile development supports my desire to create user-friendly solutions. 
            I can't wait to take part in exciting future projects, meet new technologies and deepen further in these areas.
            </ScrollAnimation>

            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
