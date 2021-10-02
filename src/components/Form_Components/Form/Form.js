import React from 'react';
import styled from 'styled-components';
import Button from './../../Button/Button';
import Input from '../InputName/InputName';
import Response from '../Response/Response';
import DragAndDropInpur from '../DragAndDropInput/DragAndDropInpur';

const FormContainer = styled.div`
    width: 343px;
`

const Form = () => {
    return (
        <FormContainer>
            <form>
                <Input labelName = {'Имя'} placeholder = {'Лев'} type='text'/>
                <Input labelName = {'Фамилия'} placeholder = {'Лещенко'} type='text'/>
                <Input labelName = {'Отчетсво'} placeholder = {'Валерьянович'} type='text'/>
                <DragAndDropInpur labelName = {'Фото'} type='file'/>
                <Button text = {'Сохранить'}/>
            </form>
            <Response text ={'Response'}/>
        </FormContainer>
    )
}

export default Form