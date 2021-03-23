/* eslint-disable react/style-prop-object */
import React from 'react';
import styled from 'styled-components';
import { Link, animateScroll as scroll } from "react-scroll";
import '../style.css';
import separatorWhite from '../../assets/img/separatorWhite.png';
import StyledSocialItem from '../atoms/StyledSocialItem/StyledSocialItem';
import Footer from '../molecules/Footer/Footer';
import Contact from '../molecules/Contact/Contact';
import MainSkillSecection from '../molecules/MainSkillsSection/MainSkillSection';
import PortfolioSection from '../molecules/PortfolioSection/PortfolioSection';

const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const StyledHeader = styled.header`
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 100vw;
    background-color: black;
    z-index: 2;
`;

const StyledUl = styled.ul`

    text-align: center;
    align-items: center;
    justify-content: center;
    display: flex;
      
    
    .link {
        
        color: white;
        text-decoration: none;
        position: relative;
        margin-right: 30px;
        
        :after {
            content: "";
            width: 0;
            height: 3px;
            position: absolute;
            top: 120%;
            left: 0;
            background: white;
            transition: width 0.5s;
        }
        
        :hover {
            color: white;
            transition: all 0.5s;
        }
        
        :hover:after {
            width: 100%;
        }
    }
`;

const StyledText = styled.h1`
    font-size: 25px;
    font-family: 'Advent Pro', sans-serif;
    font-weight: 400;
    margin-bottom: 15px;

    @media(min-width: 480px) {
        font-size: 30px;
    }

    @media(min-width: 765px) {
        font-size: 40px;
    }

    @media(min-width: 1025px) {
        font-size: 50px;
    }

    @media(min-width: 1200px) {
        font-size: 55px;
    }
`

const StyledTextSpecialization = styled(StyledText)`
    font-size: 26px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    margin-bottom: 15px;

    @media(min-width: 480px) {
        font-size: 30px;
    }

    @media(min-width: 765px) {
        font-size: 40px;
    }

    @media(min-width: 1025px) {
        font-size: 50px;
    }

    @media(min-width: 1200px) {
        font-size: 55px;
    }
`

const StyledSocialContainer = styled.div`
    display: inline;
`;

const PortfolioWebiste = () => {

    return (
        <>
            <StyledHeader>
                <nav>
                    <StyledUl>
                        <Link
                            activeClass="active"
                            className="link"
                            to="aboutMe"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >About me</Link>
                        <Link
                            activeClass="active"
                            className="link"
                            to="skills"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >Skills</Link>
                        <Link
                            activeClass="active"
                            className="link"
                            to="portfolio"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >Portfolio</Link>
                        <Link
                            activeClass="active"
                            className="link"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >CONTACT ME</Link>
                    </StyledUl>
                </nav>
            </StyledHeader>
            <main>
                <StyledWrapper>
                    <StyledText>my name is Thomas</StyledText>
                    <StyledTextSpecialization>I’M A DEVELOPER</StyledTextSpecialization>
                    <img src={separatorWhite} alt="" />
                    <StyledSocialContainer>
                        <StyledSocialItem><a href="https://github.com/NavroO" target="_blank" rel='noreferrer'><i class="fab fa-github"></i></a></StyledSocialItem>
                        <StyledSocialItem><a href="https://www.linkedin.com/in/tomasz-nawrocki-bab14218b/" target="_blank" rel='noreferrer'><i class="fab fa-linkedin"></i></a></StyledSocialItem>
                    </StyledSocialContainer>
                </StyledWrapper>
            </main>
            <MainSkillSecection />
            <PortfolioSection/>
            <Contact />
            <Footer />
        </>
    );
}

export default PortfolioWebiste;
