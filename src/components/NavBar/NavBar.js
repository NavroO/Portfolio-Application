import React, { useState } from 'react';
import styled from 'styled-components';


const StyledHamburgerContainer = styled.div`
    position: fixed;
    top: 15px;
    right: 15px;
    width: 25px;
    height: 25px;
    background: white;    
`;

const StyledHamburgerWrapper = styled.ul`
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    align-items: center;

    li {
        width: 100%     
    }
`;



const NavBar = () => {

    const [isOpen, setOpen] = useState(false);

    return (
        <StyledHamburgerContainer isOpen={isOpen} onClick={() => setOpen(!isOpen)}>
            {isOpen && (
                <StyledHamburgerWrapper>
                    <li>About me</li>
                    <li>Skills</li>
                    <li>Portfolio</li>
                    <li>CONTACT ME</li>
                </StyledHamburgerWrapper>
            )}
        </StyledHamburgerContainer>
    )
}

export default NavBar;