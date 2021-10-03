import React from 'react';
import { connect } from 'react-redux';
import tinycolor from 'tinycolor2';
import { v4 } from 'uuid';
import styled from 'styled-components';
import { addNewColor, showColorPicker } from '../../../redux/action_creators';
import ColorWrapper from '../ColorWrapper/ColorWrapper';
import ColorPicker from '../ColorPicker/ColorPicker';
import Button from '../../Button/Button';

const PaletteContainer = styled.div`
    width: 343px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`     

const Palette = ({newColor, addNewColor, colorPicker, showColorPicker}) => {

    const onClickHandler = () => {
        let colorRGB 

        if(newColor.source === 'hsl') {
            colorRGB = tinycolor({...newColor, l: 0.5}).toRgbString()
        } 
        if (newColor.source === 'hsv') {
            colorRGB = tinycolor(newColor).toRgbString()
        }
        showColorPicker()
        addNewColor(colorRGB, v4());

    }

    return (
        <PaletteContainer>
            <ColorWrapper/>
            <Button text = {'Добавить цвет'} onClick = { onClickHandler }/>
            { colorPicker === false 
              ? ''
              : <ColorPicker/>
            }
        </PaletteContainer>
    )
}

const mapStateToProps = (state) => {
    return {
        newColor: state.palette.changingColor,
        colorPicker: state.palette.showColorPicker
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addNewColor: (color, id) => dispatch(addNewColor(color, id)),
        showColorPicker: () => dispatch(showColorPicker())
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(Palette)