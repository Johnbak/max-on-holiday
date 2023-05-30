import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

interface ICollapse {
  companyName: string;
  position: string;
  period: string;
  exp: string[];
}

const Collapse = (props: ICollapse) => {
  const { companyName, position, period, exp } = props;
  const [openCollapse, setOpenCollapse] = useState(false);

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

  return (
    <div
      style={{
        paddingTop: "16px",
      }}
    >
      <section id="experience" className="nes-container with-title">
        <section style={{ paddingBottom: "24px" }}>
          <p>{companyName}</p>
          <p>{position}</p>
          <p>{period}</p>
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
                  return <ListCustom key={index}>{v}</ListCustom>;
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
