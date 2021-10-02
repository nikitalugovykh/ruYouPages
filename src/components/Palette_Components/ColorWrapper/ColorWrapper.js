import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ColorItem from '../ColorItem/ColorItem';


const Wrapper = styled.div`
    width: 343px;
    height: 301px;
    margin-top: 23px;
    padding-top: 10px;
    padding-left: 26px;
    padding-right: 26px;
    margin-bottom: 25px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-gap: 25px;

    overflow: hidden;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 5px;
    }
    &::-webkit-scrollbar-track {
        background-color: darkgrey;
    }
    &::-webkit-scrollbar-thumb {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.8);   
    }
`

const ColorWrapper = ({colors}) => {
    return (
        <Wrapper>
            {colors.map((color) => <ColorItem key = {color.id} id = { color.id } color = {color.color} />)}
        </Wrapper>
    );
}

const mapStateToProps = (state) => {
    return {
        colors: state.palette.colors
    }
}

export default connect(mapStateToProps, null)(ColorWrapper);