import React, {Component} from 'react';
import UploadFileButton from "../UploadFileButton/UploadFileButton";
import config from "../../../../../../config";
import {FormattedMessage} from "react-intl";


export class UploadImage extends Component {
  constructor(props) {
    super(props);
    this.state = this.initialState;
  }


  get initialState() {
    return {
      isLoading: false,
      errorSubmit: null,
    }
  }

  uploadFile = e => {
    const {onChange} = this.props.input;

    const fileTypeRegexp = /[.mp4|.ogg|.webm]/g;
    const folder = e.target.files[0].name.replace(fileTypeRegexp, '');

    this.setState({
      isLoading: true,
    });
    const formData = new FormData();

    formData.append('file', e.target.files[0]);
    formData.append('folder', folder);

    fetch(`${config.base}${config.api.fileupload}`,
      {
        credentials: 'include',
        method: 'POST',
        body: formData
      })
      .then(response => {
        console.log('response: ', response);
        return response.json();
      })
      .then((response) => {
        if (response.status === 'ok') {
          onChange(response.url);
          this.setState({
            isLoading: false,
            errorSubmit: true,
          })
        } else {
          this.setState({
            isLoading: false,
            errorSubmit: true,
          })
        }
      })
      .catch(error => {
        console.error(error);
        this.setState({
          isLoading: false,
          errorSubmit: true,
        })
      })
  };


  render() {
    const {isLoading, errorSubmit} = this.state;
    const {meta} = this.props;
    return (<UploadFileButton
      label={<FormattedMessage
        id='button.loadingImage'
        defaultMessage='button.loadingImage'
      />}
      isLoading={isLoading}
      errorSubmit={errorSubmit || meta && meta.touched && meta.error}
      uploadFile={this.uploadFile}
      accept={"image/jpeg, image/pjpeg, image/png"}
    />)
  }

}

export default UploadImage;
