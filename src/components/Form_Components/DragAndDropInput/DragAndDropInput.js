import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { decreaseDragCounter, dragging, increaseDragCounter, setDragCounter, updatePhoto } from '../../../redux/action_creators';
import logo from './../../../Images/add_photo.svg';


class DragAndDropInput extends React.Component {
    constructor (props) {
        super(props)

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.handleDrag = this.handleDrag.bind(this);
        this.handleDragIn = this.handleDragIn.bind(this)
        this.handleDragOut = this.handleDragOut.bind(this)
        this.handleDrop = this.handleDrop.bind(this)
    }
    dropRef = React.createRef()

    handleDrag = (ev) => {
        console.log('handleDrag');
        ev.preventDefault()
        ev.stopPropagation()

    }
    handleDragIn = (ev) => {
        console.log('handleDragIn');
        ev.preventDefault()
        ev.stopPropagation()
        this.props.increaseDragCounter() 
        if (ev.dataTransfer.items && ev.dataTransfer.items.length > 0) {
            this.props.dragging()
        }
    }
    handleDragOut = (ev) => {
        console.log('handleDragOut');
        ev.preventDefault()
        ev.stopPropagation()
        this.props.decreaseDragCounter()
        if (this.props.dragCounter > 0) return
        this.props.dragging()
    }
    handleDrop = (ev) => {
        console.log('handleDrop');
        ev.preventDefault()
        ev.stopPropagation()

        this.props.dragging()

        if (ev.dataTransfer.files && ev.dataTransfer.files.length > 0) {
            this.props.handleDrop(ev.dataTransfer.files)

            ev.dataTransfer.clearData()
            this.props.setDragCounter(0)
        }
        this.props.getPhoto(URL.createObjectURL(ev.target.files[0]))
    }

    componentDidMount() {
        this.props.setDragCounter(0)
        let div = this.dropRef.current
        div.addEventListener('dragenter', this.handleDragIn)
        div.addEventListener('dragleave', this.handleDragOut)
        div.addEventListener('dragover', this.handleDrag)
        div.addEventListener('drop', this.handleDrop)
    }
    componentWillUnmount() {
        let div = this.dropRef.current
        div.removeEventListener('dragenter', this.handleDragIn)
        div.removeEventListener('dragleave', this.handleDragOut)
        div.removeEventListener('dragover', this.handleDrag)
        div.removeEventListener('drop', this.handleDrop)
    }

    onChangeHandler(ev) {
        this.props.getPhoto(ev.target.files[0])
   }

    render () {

        const InputContainer = styled.div`
            display: flex;
            flex-direction: column;
            margin-top: 18px;
            margin-bottom: 46px;
        `
        const Label = styled.label`
            height: ${(props) => props.type === 'file' ? '86px' : 'unset'};
            width: ${(props) => props.type === 'file' ? '122px' : 'unset'};
            margin-left: ${(props) => props.type === 'file' ? 0 : '10px'};
            margin-bottom: 5px;
            font-weight: bold;
            font-size: 13px;
            line-height: 22px;
            letter-spacing: -0.408px;
            color: rgba(235, 235, 245, 0.6);
        `
        const InputComponent = styled.input`
            height: ${(props) => props.type === 'file' ? '0' : '36px'};
            width: ${(props) => props.type === 'file' ? '122px' : 'unset'};
            padding: 7px 12px;
            border: none;
            background-color: rgba(118, 118, 128, 0.24);
            border-radius: 10px;
            font-size: 17px;
            line-height: 22px;
            color: rgba(235, 235, 245, 0.6);
            opacity: ${(props) => props.type === 'file' ? 0: 1};
            visibility: ${(props) => props.type === 'file' ? 'hidden' : 'visible'};
        `
        const WrapperImg = styled.div`
            background-color: rgba(118, 118, 128, 0.24);
            border-radius: 10px;
            width: 122px;
            height: 86px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        `
        const LabelSpan = styled.p`
            margin-left: 10px;
            margin-bottom: 5px
        `
        const Img = styled.img`
            object-fit: cover;
            width: ${props => props.updatePhoto === '' ? 'unset' : '100%'};
            height: ${props => props.updatePhoto === '' ? 'unset' : '100%'};
            display: block;
            border-radius: 10px;
        ` 

        return (
            <InputContainer ref = {this.dropRef}>
                <Label htmlFor={`input_${this.props.labelName}`} type = {this.props.type}>
                    <> 
                        <LabelSpan>{this.props.labelName}</LabelSpan>
                        <WrapperImg>
                            <Img {...this.props} src={this.props.updatePhoto === '' ? logo : URL.createObjectURL(this.props.updatePhoto)} alt="Выбрать файл" width={60}/>
                        </WrapperImg>
                    </>
                </Label>
                <InputComponent
                    id = {`input_${this.props.labelName}`} 
                    type = {this.props.type}
                    accept = '.png, .jpg, .jpeg image/*'
                    onChange = { this.onChangeHandler }

                />
            </InputContainer>

        )
    }
}

const mapStateToProps = state => {
    return {
        updatePhoto: state.form.photo,
        dragStatus: state.form.dragging,
        dragCounter: state.form.dragCounter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPhoto: data => dispatch(updatePhoto(data)),
        dragging: () => dispatch(dragging()),
        setDragCounter: (num) => dispatch(setDragCounter(num)),
        increaseDragCounter: () => dispatch(increaseDragCounter()), 
        decreaseDragCounter: () => dispatch(decreaseDragCounter()), 
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(DragAndDropInput)