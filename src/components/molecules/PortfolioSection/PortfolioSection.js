import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../../atoms/SectionTitle/SectionTitle';
import ProjectView from '../ProjectView/ProjectView';
import Portfoliobg from '../../../assets/img/portfoliobg.png';
import PortfoliobgDesktop from '../../../assets/img/portfoliobgDesktop.png';


const StyledPortfolioSection = styled.section``;

const PortfolioHeader = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url(${Portfoliobg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    @media (min-width: 1024px) {
        background-image: url(${PortfoliobgDesktop});
    }
`;

const PortfolioMainBackground = styled.div`
    width: 100%;
    padding: 20px;
    background: #1A1A1A;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Montserrat', sans-serif;
`;

const PortfolioSection = () => {

    return(
        <StyledPortfolioSection id="portfolio">
            <PortfolioHeader>
                <SectionTitle>PORTFOLIO</SectionTitle>
            </PortfolioHeader>
                <PortfolioMainBackground>
                    <ProjectView
                        ProjectName="Vizualize Sorting"
                        ProjectDescription="The principle of the program is very simple. To start, the program uses a for loop to generate an array of random values. 
                        Array values ​​are set from 5 to 750 by default. 
                        After this operation is performed, the user can select one of the prepared algorithms for sorting these tables."
                        GithubLink="https://github.com/NavroO/Vizualize-Sorting"
                        LivePreviewLink="https://vizualizesorting.herokuapp.com"
                    />
                </PortfolioMainBackground>
        </StyledPortfolioSection>
    )
}

export default PortfolioSection;