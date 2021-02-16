import React from 'react';
import styled from 'styled-components';

const StyledPortfolioProjectWrapper = styled.div`
    width: 450px;
    height: 250px;
    border-radius: 5px;
    background-color: white;
    position: relative;
    color: white;
`;

const StyledPortfolioProjectTitle = styled.h1`
    color: black;
`;


const PortfolioProject = () => {

    return(
        <StyledPortfolioProjectWrapper>
            <StyledPortfolioProjectTitle>Sorting Vizualizer</StyledPortfolioProjectTitle>
            <p></p>
            <a href="https://github.com/NavroO/Vizualize-Sorting">Github repo</a>
        </StyledPortfolioProjectWrapper>
    )
}

export default PortfolioProject;