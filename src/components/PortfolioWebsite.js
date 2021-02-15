/* eslint-disable react/style-prop-object */
import React from 'react';
import styled from 'styled-components';
import './style.css';
import separatorWhite from '../assets/img/separatorWhite.png';
import separatorBlack from '../assets/img/separatorBlack.png';
import react from '../assets/img/react.png';
import css from '../assets/img/css.png';
import js from '../assets/img/js.png';
import git from '../assets/img/git.png';
import sass from '../assets/img/sass.png';
import ts from '../assets/img/ts.png';
import eng from '../assets/img/eng.png';
import figma from '../assets/img/figma.png';
import node from '../assets/img/node.png';
import SectionTitle from './SectionTitle/SectionTitle';
import MessageInput from './MessageInput/MessageInput';
import StyledSocialItem from './StyledSocialItem/StyledSocialItem';
import Button from './Button/Button';
import Footer from './Footer/Footer';
import MainSkillSecection from './mainSkillsSection/MainSkillSection';

// const navigation = document.querySelector('.navigation');
// document.querySelector('.toggle').onClick = function() {
//     this.classList.toggle('active');
//     navigation.classList.toggle('active');
// }

const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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
    display: inline-block;
`;


const StyledParagraph = styled.p`
    margin: 10px 15px 10px 15px;
    font-size: 12px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
    width: 170px;
    height: 225px;
    text-align: justify;
    margin-bottom: 40px;

    @media(min-width: 480px) {
        font-size: 20px;
        width: 300px;
    }

    @media(min-width: 765px) {
        font-size: 25px;
        width: 400px;
        height: 400px;
    }

    @media(min-width: 1025px) {
        font-size: 30px;
        width: 763px;
        height: 350px;
    }

    @media(min-width: 1200px) {
        font-size: 15px;
        width: 763px;
        height: 47px;
    }   

    @media(min-width: 1800px) {
        font-size: 18px;
    }
`;

const SkillsWrapper = styled.div`
    margin-bottom: 20px;


    @media (min-width: 1024px) {
        width: 1000px;
        height: 330px;
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

const TextArea = styled.textarea`
    width: 243px;
    height: 165px;
    font-size: 12px;
    resize: none;
    font-weight: bold;
    margin: 15px;
    border: none;
    outline: none;
    border-left: 4px solid black;
    border-bottom: 4px solid black;
    padding-left: 8px;
    color: #8B8B8B;
    background: transparent;
`;


const PortfolioWebiste = () => {

    // const openNavigation = () => {
    //     alert("Navigation open!")
    // };


    return (
        <>
            <header>
                <nav>
                    {/* <div className="toggle" onClick={openNavigation}></div>
                    <section className="navigation">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <ul>
                            <li>HOME</li>
                            <li>ABOUT ME</li>
                            <li>SKILLS</li>
                            <li>PORTFOLIO</li>
                            <li>CONTACT</li>
                        </ul>
                    </section> */}
                </nav>
            </header>
            <main>
                <StyledWrapper>
                    <StyledText>my name is Thomas</StyledText>
                    <StyledTextSpecialization>I’M A DEVELOPER</StyledTextSpecialization>
                    <img src={separatorWhite} alt="" />
                    <StyledSocialContainer>
                        <StyledSocialItem><a href="https://github.com/NavroO" target="_blank"><i class="fab fa-github"></i></a></StyledSocialItem>
                        <StyledSocialItem><a href="https://www.linkedin.com/in/tomasz-nawrocki-bab14218b/" target="_blank"><i class="fab fa-linkedin"></i></a></StyledSocialItem>
                    </StyledSocialContainer>
                </StyledWrapper>
            </main>
            <section className="aboutMe">
                <SectionTitle>ABOUT ME</SectionTitle>
                <StyledParagraph>Jestem Tomek mam 21 lat. Uwielbiam pracę w grupie,
                dobrze czuję się współpracując z innymi ludźmi i zdobywać dzięki temu nową wiedzę.
                Uważam się za osobę zorganizowaną i uczę się na błędach dlatego do skutku staram się rozwiązać napotykane mi problemy.
                Jestem osobą empatyczną, szczerą i uczciwą. Pracę traktuję jak przyjemność nie obowiązek.</StyledParagraph>
                <Button>EXPLORE</Button>
                <img src={separatorBlack} alt="" />
                <MainSkillSecection />
                <img src={separatorBlack} alt="" />
            </section>
            <section className="skills">
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
            <section className="portfolio">
                <div className="portfolioHeader">
                    <SectionTitle>PORTFOLIO</SectionTitle>
                </div>
                <div className="portfolioMainBackground"></div>
                <div className="projects">
                    {/* ENTER PROJECT HERE */}
                </div>
            </section>
            <section className="contact">
                <SectionTitle>CONTACT</SectionTitle>
                <p></p>
                <img src={separatorBlack} alt="" />
                <MessageInput placeholder="ENTER YOUR NAME*" />
                <MessageInput placeholder="ENTER YOUR EMAIL*" />
                <MessageInput placeholder="PHONE NUMBER" />
                <TextArea placeholder="YOUR MESSAGE*" />
                <Button>SUBMIT</Button>
            </section>
            <Footer />
        </>
    );
}




export default PortfolioWebiste;