import Collapse from "@/component/Content/Collapse";
import Navbar from "@/component/Menu/NavElement";
import { Container, Layout } from "@/component/layout.styled";
import { useEffect, useState } from "react";

import styled from "styled-components";

//TODO :: Add DATA
const exp = [
  {
    companyName: "BOP Company Limited",
    position: "Software Developer",
    period: "Jan 2021 - Present",
    exp: [
      "Java Spring Boot",
      "Next.js",
      "React.js",
      "TypeScript",
      "JavaScript",
      "CSS",
      "HTML",
      "Node.js",
    ],
  },
  {
    companyName: "Bluecode Global Company Limited",
    position: "Software Developer",
    period: "Jan 2020 - Dec 2020 · 1 yr",
    exp: ["Java", "Python", "Docker"],
  },
  {
    companyName: "Vertice International Co. Ltd.",
    position: "Software Developer",
    period: "Feb 2018 - Dec 2019 · 1 yr 11 mos",
    exp: ["Java Spring Boot"],
  },
  {
    companyName: "Aware Group",
    position: "Java Software Developer",
    period: "Aug 2015 - Dec 2017 · 2 yrs 5 mos",
    exp: [""],
  },
];

const skill = [];

export default function Home() {
  const [visible, setVisible] = useState(false);
  const message =
    "Hi , I'm not a Pokémon trainer , but I'm a software developer.";
  useEffect(() => {
    // const handleScroll = () => {
    //   const scrollPosition = window.scrollY;
    //   setVisible(scrollPosition >= 100 && scrollPosition <= 800);
    // };
    // window.addEventListener("scroll", handleScroll);
    // return () => {
    //   window.removeEventListener("scroll", handleScroll);
    // };
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

  const Experience = () => {
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

  return (
    <Layout>
      <Navbar />
      {/* <WrapSlideMasqot
        className="nes-octocat animate"
        visible={visible}
      ></WrapSlideMasqot> */}
      <div
        style={{
          height: "200vh",
          paddingTop: "32px",
          display: "flex",
          flexDirection: "column",
          rowGap: "36px",
        }}
      >
        <SectionHome />
        <SectionAbout />
        <Experience />
      </div>
    </Layout>
  );
}
