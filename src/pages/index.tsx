import Navbar from '@/component/Menu/NavElement';
import { Container, Layout } from '@/component/layout.styled';

import styled from 'styled-components';



export default function Home() {

  return (
    <Layout>
      <Navbar />

      <div style={{
        height: "200vh",
        paddingTop: "32px"
      }}>
        <section className='nes-container with-title'>
          <h3 className="title">About</h3>
          <p className="nes-balloon from-left nes-pointer">
            Hi, I'm not a Pokémon trainer, but I'm a software developer.
          </p>
          <i className="nes-ash"></i>
        </section>

      </div>
    </Layout>
  );
}

