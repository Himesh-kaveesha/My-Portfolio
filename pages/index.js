import { useState } from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  return (
    <Layout>
      <Hero scrollY={scrollY} />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
  );
}