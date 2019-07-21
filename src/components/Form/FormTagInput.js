import React, {Component} from 'react';

import {Alert, FormFeedback, FormGroup, InputGroup, Label} from "reactstrap";
import TagsInput from 'react-tagsinput';

import 'react-tagsinput/react-tagsinput.css';
import {FormattedMessage, injectIntl} from "react-intl";
import {GetMessageFromIntl} from "../../helpers/GetMessageFromIntl";

export class FormTagInput extends Component {

  constructor(props) {
    super(props);
    this.state = this.initialState;
    this.handleChange = this.handleChange.bind(this);
  }

  get initialState() {
    return {tags: []}
  }

  handleChange(tags) {
    const {input: {onChange}} = this.props;
    let newArr = this.returnUnique(tags);
    onChange(newArr.join(', '));
    this.setState({tags: newArr})
  }

  returnUnique(arr) {
    let obj = {};
    for (let i = 0, i_max = arr.length; i < i_max; i++) {
      obj[arr[i]] = ''; // запоминаем элемент как свойство объекта
    }
    return Object.keys(obj);
  }

  render() {
    const {input: {value}, label, meta: {touched, error}, intl} = this.props;
    console.log(GetMessageFromIntl(intl, "form.tags.placeholder"));
    return (<FormGroup className={touched ? error ? '' : 'was-validated' : ''}>
      <Label>{label}</Label>
      <InputGroup className="mb-3">

        <TagsInput
          className={`react-tagsinput form-control ${touched && error ? 'form-control-warning is-invalid' : ''}`}
          value={value ? value.split(', ') : []}
          onChange={this.handleChange}

          inputProps={{
            placeholder: GetMessageFromIntl(intl, "form.tags.placeholder"),
          }}
        />
        {
          touched && error &&
          <FormFeedback
            valid={touched ? !error : false}
            className="help-block">
            {
              error &&
              <FormattedMessage
                id={error}
              />
            }
          </FormFeedback>
        }
      </InputGroup>
    </FormGroup>)
  }
}

export default injectIntl(FormTagInput);
