import React, {Component} from 'react';
import {FormGroup, Input, Label} from "reactstrap";

const FormInputColor = ({input, label, type, meta: {touched, error}}) => {
    return (
        <div className="controls">
            <FormGroup>
                <Label>{label}</Label>
                <Input style={{    padding: 'inherit',
                    height: '35px'}} type={type} {...input}/>
            </FormGroup>
            <p className="help-block">{touched && error && <span>{error}</span>}</p>
        </div>
    )
};

export default FormInputColor;