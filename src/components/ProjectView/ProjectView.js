import React from 'react';
import styled from 'styled-components';

const StyledPortfolioProjectWrapper = styled.div`
    width: 450px;
    height: 250px;
    border-radius: 5px;
    background-color: white;
    position: relative;
    color: white;
    margin-bottom: 80px;
    margin-top: 50px;
    color: black;
`;

const StyledPortfolioProjectTitle = styled.h1`
    color: black;
`;

const StyledLink = styled.a`
    color: black;
    text-decoration: none;
`;


const PortfolioProject = ({ProjectName, ProjectDescription, ProjectLink}) => {

    return(
        <StyledPortfolioProjectWrapper>
            <StyledPortfolioProjectTitle>{ProjectName}</StyledPortfolioProjectTitle>
            <p>{ProjectDescription}</p>
            <StyledLink href={ProjectLink} target="_blank" rel='noreferrer'>Github repo</StyledLink>
        </StyledPortfolioProjectWrapper>
    )
}

export default PortfolioProject;