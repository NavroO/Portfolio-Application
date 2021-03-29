/* eslint-disable react/style-prop-object */
import React from 'react';
import Footer from '../molecules/Footer/Footer';
import Contact from '../molecules/Contact/Contact';
import MainSkillSecection from '../molecules/MainSkillsSection/MainSkillSection';
import PortfolioSection from '../molecules/PortfolioSection/PortfolioSection';
import Hero from '../molecules/Hero/Hero';


const PortfolioWebiste = () => {

    return (
        <>
            <Hero />
            <MainSkillSecection />
            <PortfolioSection />
            <Contact />
            <Footer />
        </>
    );
}

export default PortfolioWebiste;
