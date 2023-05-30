import styled from "styled-components";
const Footer = () => {
  const WrapperFooter = styled.div`
    /* text-align: center; */
    margin-bottom: 1.6rem;
    margin-top: 2.2rem;
    column-gap: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const Icon = styled.i`
    cursor: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAzElEQVRYR+2X0Q6AIAhF5f8/2jYXZkwEjNSVvVUjDpcrGgT7FUkI2D9xRfQETwNIiWO85wfINfQUEyxBG2ArsLwC0jioGt5zFcwF4OYDPi/mBYKm4t0U8ATgRm3ThFoAqkhNgWkA0jJLvaOVSs7j3qMnSgXWBMiWPXe94QqMBMBc1VZIvaTu5u5pQewq0EqNZvIEMCmxAawK0DNkay9QmfFNAJUXfgGgUkLaE7j/h8fnASkxHTz0DGIBMCnBeeM7AArpUd3mz2x3C7wADglA8BcWMZhZAAAAAElFTkSuQmCC)
        14 0,
      pointer;
  `;

  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <footer>
      <WrapperFooter className="container">
        <div>&copy; Clickbait -&gt;</div>
        <Icon
          className="nes-icon github is-large"
          onClick={() => handleClick("https://github.com/Johnbak")}
        ></Icon>
        <Icon
          className="nes-icon linkedin is-large"
          onClick={() =>
            handleClick(
              "https://www.linkedin.com/in/jittisak-kanjanathanung-88294a274/"
            )
          }
        ></Icon>
      </WrapperFooter>
    </footer>
  );
};

export default Footer;
