import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../../atoms/SectionTitle/SectionTitle';
import MessageInput from '../../atoms/MessageInput/MessageInput';
import Button from '../../atoms/Button/Button';
import separatorBlack from '../../../assets/img/separatorBlack.png';
import { Formik } from 'formik';


const StyledContact = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const TextArea = styled(MessageInput)`
    width: 240px;
    height: 165px;
    font-size: 12px;
    resize: none;
    font-weight: bold;
    margin: 15px;
    border: none;
    outline: none;
    border-left: 4px solid black;
    border-bottom: 4px solid black;
    padding-left: 8px;
    color: #8B8B8B;
    background: transparent;

    @media (min-width: 1024px) {
        height: 184px;
        width: 609px;
    }
`;


const Contact = () => {

    return (
        <StyledContact className="contact" id="contact">
            <SectionTitle>CONTACT</SectionTitle>
            <img src={separatorBlack} alt="" />
            <MessageInput placeholder="ENTER YOUR NAME*" />
            <MessageInput placeholder="ENTER YOUR EMAIL*" />
            <MessageInput placeholder="PHONE NUMBER" />
            <TextArea placeholder="YOUR MESSAGE*" />
            <Button>SUBMIT</Button>
        </StyledContact>
    )
}

export default Contact;