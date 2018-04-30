import React, {Component} from 'react';
import CKEditor from "react-ckeditor-component";
import {Alert, FormGroup, Label} from "reactstrap";

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

    componentWillMount() {

    }


    componentDidUpdate() {

    }


    render() {
        console.log('this.state:', this.state);
        const {input, label, valueField, type, meta: {touched, error}} = this.props;

        return (
            <FormGroup>
                <Label>{label}</Label>

                {/*https://docs.ckeditor.com/ckeditor4/docs/#!/api/CKEDITOR.config*/}
                <CKEditor
                    activeClass="p10"
                    config={{
                        language: 'ru',
                        filebrowserBrowseUrl: 'http://alex.taran.ru/ckfinder/ckfinder.html',
                        filebrowserImageBrowseUrl: 'http://alex.taran.ru/ckfinder/ckfinder.html?type=Images',
                        filebrowserUploadUrl:
                            'http://alex.taran.ru/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files',
                        filebrowserImageUploadUrl:
                            'http://alex.taran.ru/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images',
                        imageUploadUrl: ''
                    }}
                    scriptUrl="//cdn.ckeditor.com/4.7.3/full/ckeditor.js"
                    content={input.value}
                    events={{
                        // "change": (evt) => {
                        //     return input.onChange(evt.editor.getData())
                        // },
                        // "fileUploadRequest": (evt) => {
                        //     console.log('fileUploadRequest',evt);
                        //     evt.cancel();
                        // },
                        // "onSelect": (evt) => {
                        //     console.log('onSelect:',evt);
                        //     evt.cancel();
                        // },
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
                        // "change": (evt) => {
                        //     console.log('change:',evt);
                        //     evt.stop();
                        // }
                    }}
                />
                {
                    touched && error &&
                    <Alert color="danger">
                        {error}
                    </Alert>

                }
            </FormGroup>
        )
    }
}


export default FormCKEditor;