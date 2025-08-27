import { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children, title = "Himesh Kaveesha - Portfolio" }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Head>
        <title>{title}</title>
        <meta name="description" content="Himesh Kaveesha - Frontend Developer & UI/UX Designer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navbar scrollY={scrollY} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}