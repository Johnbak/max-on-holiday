import Collapse from "@/component/Content/Collapse";
import Footer from "@/component/Footer";
import Navbar from "@/component/Menu/NavElement";
import { Container, Layout } from "@/component/layout.styled";
import { scrollToDiv } from "@/component/utils";
import { useEffect, useState } from "react";

import styled from "styled-components";

//TODO :: Add DATA
const exp = [
  {
    companyName: "BOP Company Limited",
    position: "Software Developer",
    period: "Jan 2021 - Present",
    exp: [
      "Converting UX/UI requirements into usable code",
      "Collaborate with UX designers and back-end developers to implement features and fix",
      "Responsible for developing the frontend using Next.js",
      "Implemented responsive design and optimized the website for different devices and screen sizes",
      "Responsible for developing an API that follows the business flow using Java Spring Boot and NodeJs",
    ],
  },
  {
    companyName: "Bluecode Global Company Limited",
    position: "Software Developer",
    period: "Jan 2020 - Dec 2020 · 1 yr",
    exp: [
      "Developed RESTful API applications using Python.",
      "Developed a mobile application in Java that schedules tasks using WorkManager to run in the background",
      "Utilized Docker, a software container, to set up Docker on DigitalOcean's Linux platform",
    ],
  },
  {
    companyName: "Vertice International Co. Ltd.",
    position: "Software Developer",
    period: "Feb 2018 - Dec 2019 · 1 yr 11 mos",
    exp: [
      "Responsible for developing a Java Spring Boot API that follows the business flow",
      "Design and consistently adhere to good programming practices for the project.",
    ],
  },
  {
    companyName: "Aware Group",
    position: "Java Software Developer",
    period: "Aug 2015 - Dec 2017 · 2 yrs 5 mos",
    exp: [
      "Develop Java Backend project using Java, Spring Framework, Groovy",
      "Develop new solutions from requirements and resolved troubleshooting production issues",
    ],
  },
];

const skill = [
  "Java",
  "SpringBoot",
  "TypeScript",
  "JavaScript",
  "Next.js",
  "React.js",
  "HTML",
  "CSS",
];

export default function Home() {
  const [visible, setVisible] = useState(false);
  const message =
    "Hi , I'm not a Pokémon trainer , but I'm a software developer.";

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setVisible(scrollPosition >= 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const SectionHome = () => {
    return (
      <section id="home" className="nes-container with-title">
        <h3 className="title">Hello</h3>
        <p className="nes-balloon from-left nes-pointer">{message}</p>
        <br />
        <i className="nes-ash"></i>
      </section>
    );
  };

  const SectionAbout = () => {
    return (
      <section id="home" className="nes-container with-title">
        <h3 className="title">About</h3>
        <p
          className=""
          style={{
            wordBreak: "break-word",
            whiteSpace: "pre-line",
          }}
        >
          My name is Max <br />
          <br />
          As a Software Developer based in Bangkok,
          <br />I have experience in Java Spring Boot, Python (Flask),
          React/Next.js, Javascript, and TypeScript
        </p>
        <br />
      </section>
    );
  };

  const SectionExperience = () => {
    return (
      <section id="experience" className="nes-container with-title">
        <h3 className="title">Experience</h3>
        {exp.map((v, index) => {
          return (
            <Collapse
              key={index}
              companyName={v.companyName}
              position={v.position}
              period={v.period}
              exp={v.exp}
            />
          );
        })}
      </section>
    );
  };

  const WrapperSkill = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    row-gap: 16px;
    column-gap: 16px;
  `;

  const SectionSkill = () => {
    return (
      <section id="home" className="nes-container with-title">
        <h3 className="title">Skill</h3>
        <WrapperSkill className="lists" style={{}}>
          {skill.map((v, index) => {
            return (
              <p key={index} className="nes-badge">
                <span className="is-dark">{v}</span>
              </p>
            );
          })}

          {/* <ul className="nes-list is-circle">
            {skill.map((v, index) => {
              return (
                <li key={index}>
                  <a href="#" className="nes-badge">
                    <span className="is-dark">{v}</span>
                  </a>
                </li>
              );
            })}
          </ul> */}
        </WrapperSkill>
        <br />
      </section>
    );
  };

  const WrapSlideMasqot = styled.i<{ visible: boolean }>`
    position: fixed;
    top: 160px;

    right: ${(props) => (props.visible ? 10 : -100)}px;
    z-index: 999;
    display: flex;
    height: 100px;
    color: #333;
    text-decoration: none;
    /* transition: opacity 0.5s ease-in-out; */
    /* opacity: ${(props) => (props.visible ? 1 : 0)}; */
  `;

  const ListCustom = styled.li`
    &::before {
      color: #dcdcdc !important;
    }
  `;

  const IconMasqot = styled.i``;

  const ButtonToTop = styled.button<{ visible: boolean }>`
    position: fixed;
    bottom: ${(props) => (props.visible ? 60 : -60)}px;
    right: 2rem;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.6);
    transition: all 0.3s ease;
    z-index: 1;
    transform: rotate(90deg);
  `;

  const IconToTop = styled.i<{ visible: boolean }>`
    position: fixed;
    bottom: ${(props) => (props.visible ? 60 : -60)}px;
    right: 2rem;
    cursor: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAzElEQVRYR+2X0Q6AIAhF5f8/2jYXZkwEjNSVvVUjDpcrGgT7FUkI2D9xRfQETwNIiWO85wfINfQUEyxBG2ArsLwC0jioGt5zFcwF4OYDPi/mBYKm4t0U8ATgRm3ThFoAqkhNgWkA0jJLvaOVSs7j3qMnSgXWBMiWPXe94QqMBMBc1VZIvaTu5u5pQewq0EqNZvIEMCmxAawK0DNkay9QmfFNAJUXfgGgUkLaE7j/h8fnASkxHTz0DGIBMCnBeeM7AArpUd3mz2x3C7wADglA8BcWMZhZAAAAAElFTkSuQmCC)
        14 0,
      pointer; //TODO::Refactor
    transition: all 0.3s ease;
    z-index: 1;

    transform-style: preserve-3d;
    animation: scaleAnimation 1s infinite;

    @keyframes scaleAnimation {
      0% {
        transform: scale(3); /* Maintain the initial scaling */
      }
      50% {
        transform: scale(2.8); /* Apply intermediate scaling */
      }
      100% {
        transform: scale(3); /* Revert back to the initial scaling */
      }
    }
  `;

  return (
    <Layout>
      <IconToTop
        visible={visible}
        className="nes-icon coin is-medium"
        onClick={() => scrollToDiv("home")}
      ></IconToTop>
      <Navbar />
      {/* <WrapSlideMasqot
        className="nes-octocat animate"
        visible={visible}
      ></WrapSlideMasqot> */}
      <div
        style={{
          // height: "100vh",
          paddingTop: "32px",
          display: "flex",
          flexDirection: "column",
          rowGap: "36px",
        }}
      >
        <div id="home">
          <SectionHome />
        </div>
        <div id="about">
          <SectionAbout />
        </div>
        <div id="exp">
          <SectionExperience />
        </div>
        <div id="skill">
          <SectionSkill />
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
