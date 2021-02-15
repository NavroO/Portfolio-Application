import React from 'react';
import styled from 'styled-components';
import StyledSocialItem from '../StyledSocialItem/StyledSocialItem';
import baselinedoublearrow from '../../assets/img/ic_baseline-double-arrow.png';

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #1A1A1A;
    color: white;
`;

const StyledFooterParagraph = styled.p`
    margin-top: 7px;
    margin-bottom: 45px;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 15px;
`;

const StyledFooterEndText = styled.p`
    margin-top: 45px;
    margin-bottom: 7px;
    font-size: 11px;
    font-family: 'Nunito', sans-serif;
    font-weight: 400;

    span {
        font-weight: 700;
    }
`;

const StyledImg = styled.img`
    margin-top: 45px;
    cursor: pointer;
`;

const Footer = () => {

    const scrollTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    return (
        <StyledFooter>
            <StyledImg src={baselinedoublearrow} alt="" onClick={scrollTop}></StyledImg>
            <StyledFooterParagraph onClick={scrollTop}>BACK TO TOP</StyledFooterParagraph>
            <div>
                <StyledSocialItem><a href="https://www.facebook.com/tomek.nawrocki.568/" target="_blank"><i class="fab fa-facebook-square"></i></a></StyledSocialItem>
                <StyledSocialItem><a href="https://www.linkedin.com/in/tomasz-nawrocki-bab14218b/" target="_blank"><i class="fab fa-linkedin"></i></a></StyledSocialItem>
            </div>
            <StyledFooterEndText><span>@2021 Tomasz Nawrocki</span> All Rights Reserved.</StyledFooterEndText>
        </StyledFooter>
    );
}

export default Footer;