import React, {Component} from 'react';
import CKEditor from "react-ckeditor-component";
import {Alert, FormGroup, Label} from "reactstrap";
import {FormattedMessage} from "react-intl";

class FormCKEditor extends Component {

  constructor(props) {
    super(props);
    this.state = this.initialState;
  }

  get initialState() {
    return {
      isInit: false,
      editor: null
    }
  }

  componentWillMount() {}


  componentDidUpdate() {}


  render() {
    const {input, label, meta: {touched, error}, config} = this.props;

    return (
      <FormGroup>
        <Label>{label}</Label>

        <CKEditor
          activeClass="p10"
          config={{
            language: 'ru',

            filebrowserBrowseUrl: 'http://new.strikepro.ru/ckfinder/browser',
            filebrowserImageBrowseUrl: 'http://new.strikepro.ru/ckfinder/browser',

            filebrowserUploadUrl:
              'http://new.strikepro.ru/ckfinder/connector',
            filebrowserImageUploadUrl:
              'http://new.strikepro.ru/ckfinder/connector',
            imageUploadUrl: '',
            ...config,
          }}
          scriptUrl="//cdn.ckeditor.com/4.7.3/full/ckeditor.js"
          content={input.value}
          events={{
            "change": (evt) => {
              return input.onChange(evt.editor.getData())
            },
            "onSelect": (evt) => {
              console.log('onSelect:', evt);
              evt.cancel();
            },
            "paste": (evt) => {
              console.log('paste:', evt);
              // evt.stop();
            },
            "afterPaste": (evt) => {
              console.log('afterPaste:', evt);
              // evt.stop();
            },
            "fileUploadRequest": (evt) => {
              console.log('fileUploadRequest:', evt);
              let xhr = evt.data.fileLoader.xhr;

              xhr.setRequestHeader("Access-Control-Allow-Origin", "http://localhost:8080");
              xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
              xhr.setRequestHeader("Accept", "application/json");

              xhr.withCredentials = true;
              // evt.stop();
            },
            "fileUploadResponse": (evt) => {
              console.log('fileUploadResponse:', evt);
              // evt.stop();
            },
          }}
        />
        {
          touched && error &&
          <Alert color="danger">
            {
              error &&
              <FormattedMessage
                id={error}
              />
            }
          </Alert>

        }
      </FormGroup>
    )
  }
}


export default FormCKEditor;
