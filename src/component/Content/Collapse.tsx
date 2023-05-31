import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Typography } from "./Text";

interface ICollapse {
  companyName: string;
  position: string;
  period: string;
  exp: string[];
  time: string;
}

const Collapse = (props: ICollapse) => {
  const { companyName, position, period, exp, time } = props;
  const [openCollapse, setOpenCollapse] = useState(false);
  return (
    <div
      style={{
        paddingTop: "16px",
      }}
    >
      <section id="experience" className="nes-container with-title">
        <section style={{ paddingBottom: "24px" }}>
          <WrapperCompany>{companyName}</WrapperCompany>
          <Typography>{position}</Typography>
          <Typography>{period}</Typography>
          <Typography>{time}</Typography>
          <ButtonOpen
            type="button"
            className="nes-btn is-primary showcode"
            onClick={() => {
              setOpenCollapse(!openCollapse);
            }}
          >
            &lt;&gt;
          </ButtonOpen>
        </section>
      </section>
      <section
        style={{
          display: openCollapse ? "block" : "none",
        }}
      >
        <WrapperDescription>
          <p> Description</p>

          {exp.length > 0 && (
            <div className="lists">
              <ul className="nes-list is-disc">
                {exp.map((v, index) => {
                  return (
                    <ListCustom key={index}>
                      <Typography>{v}</Typography>
                    </ListCustom>
                  );
                })}
              </ul>
            </div>
          )}
        </WrapperDescription>
      </section>
    </div>
  );
};
export default Collapse;

// Change Bullet Color
const ListCustom = styled.li`
  &::before {
    color: #dcdcdc !important;
    top: calc(0%) !important; //move bullet to top
  }
`;

const ButtonOpen = styled.button`
  position: absolute;
  bottom: 0px;
  right: -4px;
`;

const WrapperDescription = styled.div`
  background: #1e1e1e;
  color: #dcdcdc;
  font-size: 15px;
  line-height: 1.5;
  padding: 1.5rem;
`;

const WrapperCompany = styled.p`
  color: red;
  font-weight: bold;
`;
