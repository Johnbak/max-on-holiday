import Navbar from '@/component/Menu/NavElement';
import { Container, Layout } from '@/component/layout.styled';
import { useState } from 'react';
import styled from 'styled-components';



export default function Home() {
  const [hamburger, setHamburger] = useState(false);
  return (
    <Layout>
      <Navbar />
      <h1>Centered Container !!</h1>
      <div style={{
        height: "200vh"
      }}>
        <button type="button" className="nes-btn is-primary">Primary</button>
        <button type="button" className="nes-btn is-success">Success</button>
        <button type="button" className="nes-btn is-warning">Warning</button>
        <button type="button" className="nes-btn is-error">Error</button>
        <button type="button" className="nes-btn is-disabled">Disabled</button>
      </div>
    </Layout>
  );
}

