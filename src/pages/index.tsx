import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: red;
`;

export default function Home() {
  return (
    <Container>
      <h1>Centered Container !!</h1>
      <div>
        <button type="button" className="nes-btn is-primary">Primary</button>
        <button type="button" className="nes-btn is-success">Success</button>
        <button type="button" className="nes-btn is-warning">Warning</button>
        <button type="button" className="nes-btn is-error">Error</button>
        <button type="button" className="nes-btn is-disabled">Disabled</button>
      </div>
    </Container>
  );
}

