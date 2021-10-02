import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
    height: 50px;
    width: 343px;
    background: #007AFF;
    border-radius: 8px;
    border: none;
    font-family: Gotham Pro;
    font-size: 17px;
    line-height: 22px;
    text-align: center;
    color: #FFFFFF;
    cursor: pointer;
    transition: all 0.3s linear;
    
    &:hover {
        background: #0054b1;
    }
    &:active {
        transform: translateY(4px);
    }
`

const Button = ({text, onClick}) => {
    return (
        <Btn onClick = { onClick }>{text}</Btn>
    )
}

export default Button