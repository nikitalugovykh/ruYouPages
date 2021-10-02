import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 18px;
`
const Label = styled.label`
    height: ${({type}) => type === 'file' ? '86px' : 'unset'};
    width: ${({type}) => type === 'file' ? '122px' : 'unset'};
    margin-left: ${({type}) => type === 'file' ? 0 : '10px'};
    margin-bottom: 5px;
    font-weight: bold;
    font-size: 13px;
    line-height: 22px;
    letter-spacing: -0.408px;
    color: rgba(235, 235, 245, 0.6);
`
const InputComponent = styled.input`
    height: ${({type}) => type === 'file' ? '86px' : '36px'};
    width: ${({type}) => type === 'file' ? '122px' : 'unset'};
    padding: 7px 12px;
    border: none;
    background-color: rgba(118, 118, 128, 0.24);
    border-radius: 10px;
    font-size: 17px;
    line-height: 22px;
    color: rgba(235, 235, 245, 0.6);
    opacity: ${({type}) => type === 'file' ? 0: 1};
    visibility: ${({type}) => type === 'file' ? 'hidden' : 'visible'};
`
const Input = ({labelName, placeholder, type}) => (

    <InputContainer>
        <Label htmlFor={`input_${labelName}`} type = {type}>{labelName}</Label>
        <InputComponent
            id = {`input_${labelName}`} 
            placeholder = {placeholder} 
            type = {type}
            accept = ".png, .jpg, .jpeg image/*"
        />
    </InputContainer>
)


export default Input