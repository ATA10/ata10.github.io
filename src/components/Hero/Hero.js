import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
import { TypeAnimation } from 'react-type-animation';
import ScrollAnimation from "react-animate-on-scroll";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <ScrollAnimation animateIn="fadeIn" >
              <TypeAnimation
                cursor={false}
                sequence={[
                  'Hi, I\'m Anıl taha.',
                  () => setShowSubtitle(true)
                ]}
                speed={{ type: "keyStrokeDelayInMs", value: 150 }}
                wrapper="h1"
                repeat={0}
              />
              {showSubtitle &&
                <TypeAnimation
                  cursor={true}
                  sequence={[
                    500,
                    'A computer engineer.',
                    1000,
                    'A Balıkesir university graduate.', 
                    1000,
                    'Passionate about information technologies..',
                    1000,
                    'I have a talented and innovative mindset in problem solving.',
                    1000,
                    'A....',
                    1000,
                    'I focus on constantly improving myself and finding solutions to the problems brought by technology.',
                    500,
                    'I can work effectively on projects with my strong analytical thinking and programming skills.',
                    1000,
                    "I have an innovative mindset and am always willing to adapt to new technologies and developments.",
                    500,
                    "I am a professional who is prone to teamwork and has strong communication skills.",
                    1000,
                    "Please scroll down to see more details about my projects.",
                    500,
                    "I'm sure it's full of powerful and impressive solutions that will inspire you!",
                    1000,
                    "Ok...",
                    1000,
                    "If you're still here",
                    1000,
                    "I can't wait to meet me and talk about our projects! ",
                    1000,
                    "See you later!...",
                    300,
                    () => setShowScrollDown(true),
                    2000,
                    "You're uh...",
                    1000,
                    "You're uh... still here?.....",
                    1000,
                    "Ok, this has been fun, but I'm gonna restart the loop now...",
                  ]}
                  speed={50}
                  deletionSpeed={65}
                  wrapper="h5"
                  repeat={Infinity}
                />
              }
            </ScrollAnimation>

          </HeroLeft>
          <HeroRight>
            <ScrollAnimation animateIn="fadeIn">
              <Image
                src="/krktr.png"
                alt="karakter"
              />
            </ScrollAnimation>
          </HeroRight>
        </HeroWrapper>
        {showScrollDown &&<ScrollAnimation animateIn="flipInX" offset={0}>
        <ScrollDown to="projects" id="scrollDown">
          <ScrollLink>
            Scroll down
            <img
              src="/scroll-down.svg"
              alt="scroll-down"
            />
          </ScrollLink>
        </ScrollDown>
        </ScrollAnimation>}
      </HeroContainer>
    </main>
  );
}

export default Hero;
