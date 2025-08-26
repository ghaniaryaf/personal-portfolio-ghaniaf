// pages/index.tsx
import React from 'react';
import Head from 'next/head';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <main>
      <h1 className="text-3xl font-bold text-blue-600">My Portfolio</h1>
    <div>
      <Head>
        <title>John Doe - Portfolio</title>
        <meta name="description" content="Professional portfolio of John Doe, Frontend Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
    </div>
  </main>
  );
};

export default Home;