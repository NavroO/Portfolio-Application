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
`;

const StyledFooterEndText = styled.p`
    margin-top: 45px;
    margin-bottom: 7px;
    font-size: 12px;
`;

const StyledImg = styled.img`
    margin-top: 45px;
`;

const Footer = () => {
    return (
        <StyledFooter>
            <StyledImg src={baselinedoublearrow} alt=""></StyledImg>
            <StyledFooterParagraph>BACK TO TOP</StyledFooterParagraph>
            <div>
                <StyledSocialItem><a href="https://www.facebook.com/tomek.nawrocki.568/" target="_blank"><i class="fab fa-facebook-square"></i></a></StyledSocialItem>
                <StyledSocialItem><a href="https://www.linkedin.com/in/tomasz-nawrocki-bab14218b/" target="_blank"><i class="fab fa-linkedin"></i></a></StyledSocialItem>
                <StyledSocialItem><a href="https://www.instagram.com/navroo00/" target="_blank"><i class="fab fa-instagram-square"></i></a></StyledSocialItem>
                <StyledSocialItem><i class="far fa-envelope"></i></StyledSocialItem>
            </div>
            <StyledFooterEndText>@2021 Tomasz Nawrocki All Rights Reserved.</StyledFooterEndText>
        </StyledFooter>
    );
}

export default Footer;