import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import TopSelling from '../TopSelling';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <TopSelling />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;