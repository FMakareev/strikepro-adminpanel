import React, {Component} from 'react';
import {Alert, FormGroup, Input, Label} from "reactstrap";

const FormInput = ({input, label, type, meta: {touched, error}}) => {
    return (
        <div className="controls">
            <FormGroup>
                <Label>{label}</Label>
                <Input type={type} {...input}/>
                {
                    touched && error &&
                    <Alert color="danger">
                        {error}
                    </Alert>

                }
            </FormGroup>
        </div>
    )
};


export default FormInput;