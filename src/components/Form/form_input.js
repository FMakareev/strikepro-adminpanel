import React from 'react';
import {Alert, FormGroup, Input, Label} from "reactstrap";

export const FormInput = ({input, label, type, meta: {touched, error}}) => {
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
