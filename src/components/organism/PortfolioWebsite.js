/* eslint-disable react/style-prop-object */
import React from 'react';
import styled from 'styled-components';
import { Link, animateScroll as scroll } from "react-scroll";
import '../style.css';
import separatorWhite from '../../assets/img/separatorWhite.png';
import react from '../../assets/img/react.png';
import css from '../../assets/img/css.png';
import js from '../../assets/img/js.png';
import git from '../../assets/img/git.png';
import sass from '../../assets/img/sass.png';
import ts from '../../assets/img/ts.png';
import eng from '../../assets/img/eng.png';
import figma from '../../assets/img/figma.png';
import node from '../../assets/img/node.png';
import SectionTitle from '../atoms/SectionTitle/SectionTitle';
import StyledSocialItem from '../atoms/StyledSocialItem/StyledSocialItem';
import Footer from '../molecules/Footer/Footer';
import Contact from '../molecules/Contact/Contact';
import ProjectView from '../molecules/ProjectView/ProjectView';
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


const SkillsWrapper = styled.div`
    margin-bottom: 20px;


    @media (min-width: 1024px) {
        width: 1000px;
        height: 330px;
        margin-left: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        h2 {
            position: absolute;
            top: 0%;
            left: 0%;
        }
    }

`;

const SkillItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 50px;

    p {
        margin-top: 15px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-size: 24px;
    }

    @media(min-width: 1024px) {
        display: inline-block;
        text-align: center;
        margin-right: 60px;
    }
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
            <section className="skills" id="skills">
                <SectionTitle>SKILLS</SectionTitle>
                <SkillsWrapper>
                    <h2>USING NOW:</h2>
                    <SkillItem>
                        <img src={react} alt="" />
                        <p>React</p>
                    </SkillItem>
                    <SkillItem>
                        <img src={css} alt="" />
                        <p>CSS</p>
                    </SkillItem>
                    <SkillItem>
                        <img src={js} alt="" />
                        <p>JavaScript</p>
                    </SkillItem>
                    <SkillItem>
                        <img src={git} alt="" />
                        <p>Git</p>
                    </SkillItem>
                </SkillsWrapper>
                <SkillsWrapper>
                    <h2>LEARNING:</h2>
                    <SkillItem>
                        <img src={sass} alt="" />
                        <p>Sass</p>
                    </SkillItem>
                    <SkillItem>
                        <img src={ts} alt="" />
                        <p>TypeScript</p>
                    </SkillItem>
                    <SkillItem>
                        <img src={node} alt="" />
                        <p>Node.js</p>
                    </SkillItem>
                </SkillsWrapper>
                <SkillsWrapper>
                    <h2>OTHER SKILLS:</h2>
                    <SkillItem>
                        <img src={eng} alt="" />
                        <p>English B2</p>
                    </SkillItem>
                    <SkillItem>
                        <img src={figma} alt="" />
                        <p>Figma</p>
                    </SkillItem>
                </SkillsWrapper>
            </section>
            <PortfolioSection>
                <div className="portfolioMainBackground">
                    <ProjectView
                        ProjectName="Vizualize Sorting"
                        ProjectDescription="The principle of the program is very simple. To start, the program uses a for loop to generate an array of random values. 
                        Array values ​​are set from 5 to 750 by default. 
                        After this operation is performed, the user can select one of the prepared algorithms for sorting these tables."
                        GithubLink="https://github.com/NavroO/Vizualize-Sorting"
                        LivePreviewLink="https://vizualizesorting.herokuapp.com"
                    />
                </div>
            </PortfolioSection>
            <Contact />
            <Footer />
        </>
    );
}




export default PortfolioWebiste;
