import React from 'react';
import styled from 'styled-components';
import laptop from '../../../assets/img/laptop.png';
import pencile from '../../../assets/img/pencile.png';
import key from '../../../assets/img/key.png';
import separatorBlack from '../../../assets/img/separatorBlack.png';
import SectionTitle from '../../atoms/SectionTitle/SectionTitle';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Button from '../../atoms/Button/Button';
import react from '../../../assets/img/react.png';
import css from '../../../assets/img/css.png';
import js from '../../../assets/img/js.png';
import git from '../../../assets/img/git.png';
import sass from '../../../assets/img/sass.png';
import ts from '../../../assets/img/ts.png';
import eng from '../../../assets/img/eng.png';
import figma from '../../../assets/img/figma.png';
import node from '../../../assets/img/node.png';
import ProjectView from '../ProjectView/ProjectView';


const StyledAboutMe = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const StyledMainWrapper = styled.div`
    margin: 10px 15px 10px 15px;
    width: 240px;
    height: 490px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const StyledItem = styled.div`
    width: 160px;
    height: 280px;
    position: relative;
    margin: 30px 15px 10px 15px;

    h3 {
        margin-bottom: 10px;
        font-size: 17px;
        font-weight: 700;
        font-family: 'Montserrat', sans-serif;
    }

    p {
        font-size: 13px;
        font-weight: 300;
        font-family: 'Open Sans', sans-serif;
    }

    img {
        position: absolute;
        top: -5%;
        left: -20%
    }
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

const MainSkillSecection = () => {

    return (
        <>
            <StyledAboutMe id="aboutMe">
                <SectionTitle>ABOUT ME</SectionTitle>
                <Paragraph>
                    I am Tom, I am 21 years old. I love working in a group,
                    I feel good working with other people and thus gain new knowledge.
                    I consider myself an organized person and I learn from my mistakes, which is why I try to solve the problems I encounter.
                    I am an empathetic, sincere and honest person. I treat my work as a pleasure, not an obligation.
                </Paragraph>
                <Button>DOWNLOAD RESUME</Button>
                <img src={separatorBlack} alt="" />
                <StyledMainWrapper>
                    <StyledItem>
                        <img src={pencile} alt="" />
                        <h3>DESIGN</h3>
                        <p>I can design the website based on your needs and suggestions.
                    I can also create it from scratch by consulting with you during work.</p>
                    </StyledItem>
                    <StyledItem>
                        <img src={key} alt="" />
                        <h3>DEVELOPMENT</h3>
                        <p>Based on a project created by me or another one, sent by you,
                    I can program the website to be fully functional and responsive.</p>
                    </StyledItem>
                    <StyledItem>
                        <img src={laptop} alt="" />
                        <h3>MAINTENANCE</h3>
                        <p>In case of any problems or the need for changes, I can introduce new functionalities and solutions.</p>
                    </StyledItem>
                </StyledMainWrapper>
                <img src={separatorBlack} alt="" />
            </StyledAboutMe>
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
        </>
    );
}

export default MainSkillSecection;