import React from "react";
import {FormFeedback, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText, Label} from "reactstrap";
import {FormattedMessage} from "react-intl";

export const TextField = ({input, label, type, placeholder, required, icon, meta: {touched, error}}) => {
  return (
    <FormGroup className={touched ? error ? '' : 'was-validated' : ''}>
      {
        label && <Label>{label}</Label>
      }
      <InputGroup className="mb-3">
        {
          icon &&
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className={icon}/>
            </InputGroupText>
          </InputGroupAddon>
        }

        <Input
          {...input}
          type={type}
          valid={touched ? !error : false}
          className={touched ? error ? 'form-control-warning is-invalid' : '' : ''}
          placeholder={placeholder}
          required={required}/>
        <FormFeedback
          valid={touched ? !error : false}
          className="help-block"
        >
          {
            error && <FormattedMessage
              id={error}
            />
          }
        </FormFeedback>
      </InputGroup>

    </FormGroup>)
}

export default TextField;
