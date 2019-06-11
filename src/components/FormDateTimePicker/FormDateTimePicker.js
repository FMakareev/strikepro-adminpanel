import React, {Component} from 'react';
import {FormGroup, Label} from "reactstrap";
import DatePicker  from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {dateToFormat} from "../../helpers/dateToFormat";




export class FormDateTimePicker extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(value) {
    const {input: {onChange}} = this.props;
    return onChange(dateToFormat(value));
  }

  render() {
    const {label, input: {value}} = this.props;

    return (
      <div className="controls">
        <FormGroup>
          <Label>{label}</Label>
          <DatePicker
            locale={'ru'}
            minDate={new Date()}
            selected={new Date(value || new Date() )}
            onChange={this.handleChange}
            className={'form-control full-width'}
          />
        </FormGroup>
      </div>
    );
  }

}


export default FormDateTimePicker;
