import React from 'react';
import {Alert, FormGroup, Input, Label} from "reactstrap";

const FormSelect = ({input, label, type, data, meta: {touched, error}}) =>  {
    return (
        <FormGroup>
            <Label>{label}</Label>
            <Input type={type} {...input} >

                <option>выберите категорию...</option>

                {
                    data && data.map((item, index) => {
                        return (<option key={index} checked={item.id === input.value} value={item.id}>{item.name}</option>)
                    })
                }
            </Input>
            {
                touched && error &&
                <Alert color="danger">
                    {error}
                </Alert>

            }
        </FormGroup>
    );
}

export default FormSelect;