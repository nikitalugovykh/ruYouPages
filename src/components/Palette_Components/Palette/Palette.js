import React from 'react';
import { connect } from 'react-redux';
import tinycolor from 'tinycolor2';
import { v4 } from 'uuid';
import ColorWrapper from '../ColorWrapper/ColorWrapper';
import ColorPicker from '../ColorPicker/ColorPicker';
import Button from '../../Button/Button';
import styled from 'styled-components';
import { addNewColor } from '../../../redux/action_creators';

const PaletteContainer = styled.div`
    width: 343px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`     

const Palette = ({newColor,addNewColor}) => {

    const onClickHandler = () => {
        let colorRGB 

        if(newColor.source === 'hsl') {
            colorRGB = tinycolor({...newColor, l: 0.5}).toRgbString()
        } 
        if (newColor.source === 'hsv') {
            colorRGB = tinycolor(newColor).toRgbString()
        }

        addNewColor(colorRGB, v4());

    }

    return (
        <PaletteContainer>
            <ColorWrapper/>
            <Button text = {'Добавить цвет'} onClick = { onClickHandler }/>
            <ColorPicker color="orange"/>
        </PaletteContainer>
    )
}

const mapStateToProps = (state) => {
    return {
        newColor: state.palette.changingColor
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addNewColor: (color, id) => dispatch(addNewColor(color, id))
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(Palette)