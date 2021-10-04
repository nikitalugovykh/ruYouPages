import React from 'react';
import styled from 'styled-components';
import Button from './../../Button/Button';
import Input from '../InputName/InputName';
import Response from '../Response/Response';
import DragAndDropInput from '../DragAndDropInput/DragAndDropInput';
import { connect } from 'react-redux';
import { updateFirstName, updatePatronymicName, updatePhoto, updateResponse, updateSecondName } from '../../../redux/action_creators';

const FormContainer = styled.div`
    width: 343px;
`

const Form = ({
    updateFirstName, 
    updateSecondName, 
    updatePatronymic, 
    fullName, 
    response, 
    photo, 
    updateResponse,
    updatePhoto
}) => {

    const onChangeHandler = (ev) => {
        let elem = ev.target
        if (elem.id === 'firstName') {
            updateFirstName(elem.value)
        } else if (elem.id === 'secondName') {
            updateSecondName(elem.value)
        } else {
            updatePatronymic(elem.value)
        }
    }
    const onSubmitHandler = (ev) => {
        ev.preventDefault();
        let f = fullName;

        fetch('https://test-job.pixli.app/send.php', {
        method: 'POST',
        body: {
            "action" : 'send_data',
            "id": 1,
            "image": photo,
            "contact": [f.firstName, f.secondName, f.patronymic]
        },
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
})
  .then((response) => response.json())
  .then((json) => updateResponse(json.msg));
    
    updateFirstName('')
    updateSecondName('')
    updatePatronymic('')
    updatePhoto('')

    }

    return (
        <FormContainer>
            <form onSubmit = { onSubmitHandler } action = 'send_data'>
                <Input labelName = {'Имя'} id = { 'firstName' } value = { fullName.firstName } placeholder = {'Лев'} type='text' onChange = { onChangeHandler }/>
                <Input labelName = {'Фамилия'} id = { 'secondName' } value = { fullName.secondName }   placeholder = {'Лещенко'} type='text' onChange = { onChangeHandler }/>
                <Input labelName = {'Отчетсво'} id = { 'patronymic' } value = { fullName.patronymic }   placeholder = {'Валерьянович'} type='text' onChange = { onChangeHandler }/>
                <DragAndDropInput labelName = {'Фото'} type='file'/>
                <Button text = {'Сохранить'} type = { 'sumbit' }/>
            </form>
            <Response text ={'Response'} data = { response }/>
        </FormContainer>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateFirstName: (name) => dispatch(updateFirstName(name)),
        updateSecondName: (name) => dispatch(updateSecondName(name)),
        updatePatronymic: (name) => dispatch(updatePatronymicName(name)),
        updatePhoto: (data) => dispatch(updatePhoto(data)),
        updateResponse: (data) => dispatch(updateResponse(data)),
    }
}

const mapStateToProps = (state) => {
    return {
        fullName: state.form.fullName,
        photo: state.form.photo,
        response: state.form.response
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)