import React from 'react';
import styled from 'styled-components';

const StyledProject = styled.div`

    padding: 20px;
    width: 250px;
    border-radius: 15px;
    background: #2a2b2f;
    border-radius: 15px;
    border: 2px solid #1e1f23;
    box-shadow: 0 20px 50px rgba(0,0,0,0.5);
    color: white;
    

    @media (min-width: 481px) {
        width: 380px;
    }

    @media (min-width: 769px) {
        width: 450px;
    }

    @media (min-width: 1025px) {
        width: 750px;
    }
`;

const StyledProjectName = styled.h2`
    margin-bottom: 20px;
`;

const StyledDescription = styled.p`
    margin-bottom: 25px;
`;

const Link = styled.a`
     
    color: white;
    text-decoration: none;
    position: relative;
    margin-right: 30px;
    color: white;
        
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
`;


const ProjectView = ({ ProjectName, ProjectDescription, GithubLink, LivePreviewLink }) => {


    return (
        <StyledProject>
            <StyledProjectName>{ProjectName}</StyledProjectName>
            <StyledDescription>{ProjectDescription}</StyledDescription>
            <Link href={GithubLink} target="_blank" rel="noreferrer">Github</Link>
            <Link href={LivePreviewLink} target="_blank" rel="noreferrer">Live</Link>
        </StyledProject>
    )
}

export default ProjectView;