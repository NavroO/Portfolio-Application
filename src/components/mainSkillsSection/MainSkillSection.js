import React from 'react';
import styled from 'styled-components';
import laptop from '../../assets/img/laptop.png';
import pencile from '../../assets/img/pencile.png';
import key from '../../assets/img/key.png';

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
        font-weight: bold;
    }

    p {
        font-size: 13px;
        font-weight: lighter
    }

    img {
        position: absolute;
        top: -5%;
        left: -20%
    }
`;

const MainSkillSecection = () => {

    return (
        <StyledMainWrapper>
            <StyledItem>
                <img src={pencile} alt=""/>
                <h3>DESIGN</h3>
                <p>I can design the website based on your needs and suggestions.
                    I can also create it from scratch by consulting with you during work.</p>
            </StyledItem>
            <StyledItem>
                <img src={key} alt=""/>
                <h3>DEVELOPMENT</h3>
                <p>Based on a project created by me or another one, sent by you,
                    I can program the website to be fully functional and responsive.</p>
            </StyledItem>
            <StyledItem>
                <img src={laptop} alt=""/>
                <h3>MAINTENANCE</h3>
                <p>In case of any problems or the need for changes, I can introduce new functionalities and solutions.</p>
            </StyledItem>
        </StyledMainWrapper>
    );
}

export default MainSkillSecection;