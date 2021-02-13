import React from 'react';
import styled from 'styled-components';
import './style.css';
import separatorWhite from '../assets/img/separatorWhite.png';
import separatorBlack from '../assets/img/separatorBlack.png';
import SectionTitle from './SectionTitle/SectionTitle';
import MessageInput from './MessageInput/MessageInput';
import StyledSocialItem from './StyledSocialItem/StyledSocialItem';
import Button from './Button/Button';
import Footer from './Footer/Footer';
import MainSkillSecection from './mainSkillsSection/MainSkillSection';


const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const StyledText = styled.h1`
    font-size: 20px;
    margin-bottom: 15px;
`

const StyledSocialContainer = styled.div`
    display: inline-block;
`;


const StyledParagraph = styled.p`
    margin: 10px 15px 10px 15px;
    font-size: 12px;
    font-weight: lighter;
    width: 160px;
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
        font-size: 35px;
        width: 800px;
        height: 450px;
    }

    @media(min-width: 1200px) {
        width: 800px;
        height: 450px;
    }

    @media(min-width: 1800px) {
        font-size: 45px;
        width: 900px;
        height: 550px;
    }
`;


const PortfolioWebiste = () => {


    return (
        <>
            <header>
                <nav>

                </nav>
            </header>
            <main>
                <StyledWrapper>
                    <StyledText>my name is Thomas</StyledText>
                    <StyledText>I’M A DEVELOPER</StyledText>
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
                <MainSkillSecection/>
                <img src={separatorBlack} alt="" />
            </section>
            <section className="skills">
                <SectionTitle>SKILLS</SectionTitle>
                <h2>USING NOW:</h2>
            </section>
            <section className="portfolio">
                <SectionTitle>PORTFOLIO</SectionTitle>
            </section>
            <section className="contact">
                <SectionTitle>CONTACT</SectionTitle>
                <p></p>
                <img src={separatorBlack} alt="" />
                <MessageInput placeholder="ENTER YOUR NAME*" />
                <MessageInput placeholder="ENTER YOUR EMAIL*" />
                <MessageInput placeholder="PHONE NUMBER" />
                <Button>SUBMIT</Button>
            </section>
            <Footer/>
        </>
    );
}




export default PortfolioWebiste;