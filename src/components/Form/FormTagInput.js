import React, {Component} from 'react';

import TagsInput from 'react-tagsinput'

import 'react-tagsinput/react-tagsinput.css'
import {Alert, FormGroup, Label} from "reactstrap";

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
    const {input: {value}, label, meta: {touched, error}} = this.props;
    return (
      <div className="controls">
        <FormGroup>
          <Label>{label}</Label>
          <TagsInput value={value ? value.split(', ') : []} onChange={this.handleChange}/>
        </FormGroup>
        {
          touched && error &&
          <Alert color="danger">
            {error}
          </Alert>
        }
      </div>
    )
  }
}
