import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import tinycolor from 'tinycolor2';
import { changePermissionForUpdateColor, changingColor, removeColor, showColorPicker } from '../../../redux/action_creators';
import removeIcon from './../../../Images/remove_icon.svg'

const RemoveBtn = styled.div`
    position: absolute;
    content: '';
    width: 17px;
    height: 17px;
    background-image: url(${removeIcon});
    background-repeat: no-repeat;
    top: -8px;
    right: -7px;
    visibility: hidden;
    opacity: 0;
    transition: all 0.2s linear;
`

const Color = styled.div`
    width: 54px;
    height: 54px;
    background-color: ${({color}) => color};
    border-radius: 5px; 
    justify-self: center;
    position: relative;
    cursor: pointer;
    &:hover ${RemoveBtn} {
        visibility: visible;
        opacity: 1;
        cursor: pointer;
    }
    &:active ${RemoveBtn} {
        transform: scale(1.3);
    }
`

const ColorItem = ({ color, id, remove, showColorPicker, updateColorPicker, permissionUpdateColor}) => {
    
    const removeClickHandler = (ev) => {
        ev.stopPropagation()
        remove(id)
    }

    const colorClickHandler = () => {
        let colorHSV = tinycolor(color).toHsv()
        showColorPicker()
        permissionUpdateColor(id)
        updateColorPicker(colorHSV)
    }

    return (
        <Color color = { color } onClick = { colorClickHandler }>
            <RemoveBtn onClick = { removeClickHandler }/>
        </Color>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        remove: (id) => dispatch(removeColor(id)),
        showColorPicker: () => dispatch(showColorPicker()),
        updateColorPicker: (color) => dispatch(changingColor(color)),
        permissionUpdateColor: (id) => dispatch(changePermissionForUpdateColor(id))
    }
}


export default connect(null, mapDispatchToProps)(ColorItem)

