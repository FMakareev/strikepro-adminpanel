import React, {Component} from 'react';
import {Alert, FormGroup, Input, Label} from "reactstrap";


export class FormSelect extends Component {

  static defaultProps = {
    valueKey: 'id',
    labelKey: 'name',
  };

  componentDidMount() {
    const {
      input,
      defaultValue,
    } = this.props;

    if(!input.value && defaultValue){
      input.onChange(defaultValue);
    }

  }

  render() {
    const {
      input,
      label,
      type,
      data,
      meta: {touched, error},
      valueKey,
      labelKey,
    } = this.props;
    return (
      <FormGroup>
        <Label>{label}</Label>
        <Input type={type} {...input} >
          <option>выберите категорию...</option>
          {
            Array.isArray(data) && data.map((item, index) => (<option
              key={index}
              selected={item[valueKey] === input.value}
              value={item[valueKey]}>
              {item[labelKey]}
            </option>))
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
}


export default FormSelect;
