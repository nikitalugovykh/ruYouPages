import React from 'react';
import { CustomPicker } from "react-color";
import { Hue, Saturation } from "react-color/lib/components/common";
import { connect } from 'react-redux';
import styled from 'styled-components';
import onClickOutside from "react-onclickoutside";
import { changingColor, showColorPicker, updateColor } from '../../../redux/action_creators';
import tinycolor from 'tinycolor2';

const PickerWrapper = styled.div`
      margin-top: 25px;
`
const HueWrapper = styled.div`
      height: 10px;
      width: 343px;
      position: relative;
      margin-bottom: 10px;
      cursor: pointer;
`
const SaturationWrapper = styled.div`
      width: 343px;
      height: 150px;
      position: relative;
      cursor: pointer;
`

const MyPicker = ({ changingColor, updateColor, showColorPicker, updateColorItem }) => {


  const onChange = color => {

    let colorRGB 

        if(color.source === 'hsl') {
            colorRGB = tinycolor({...color, l: 0.5}).toRgbString()
        } 
        if (color.source === 'hsv') {
            colorRGB = tinycolor(color).toRgbString()
        }

    changingColor(color)
    updateColorItem(colorRGB)


  }
  
  MyPicker.handleClickOutside = () => {
    showColorPicker();
    updateColorItem(false)

  }

  return (
    <PickerWrapper>
      <HueWrapper>
        <Hue hsl={updateColor} onChange={onChange} />
      </HueWrapper>

      <SaturationWrapper>
        <Saturation hsl={updateColor} hsv={updateColor} onChange={onChange}/>
      </SaturationWrapper>
      
    </PickerWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    updateColor: state.palette.changingColor
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changingColor: color => dispatch(changingColor(color)),
    showColorPicker: () => dispatch(showColorPicker()),
    updateColorItem: (color) => dispatch(updateColor(color))
  }
}

const clickOutsideConfig = {
  handleClickOutside: () => MyPicker.handleClickOutside
};

export default connect(mapStateToProps, mapDispatchToProps)(onClickOutside(CustomPicker(MyPicker), clickOutsideConfig));
