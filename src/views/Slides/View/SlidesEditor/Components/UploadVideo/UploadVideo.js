import React, {Component} from 'react';
import UploadFileButton from "../UploadFileButton/UploadFileButton";
import config from "../../../../../../config";
import {hasOwnProperty} from "../../../../../../helpers/hasOwnProperty";
import {FormattedMessage} from "react-intl";


const fakeUploadFileServer = (formData) => {
  return {"status": "ok", "url": `${formData.get('folder')}/${formData.get('file')}`}
};


export class UploadVideo extends Component {
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

  setNewVideoInStore = (response, fileType, folder) => {
    const {value, onChange} = this.props.input;
    if (hasOwnProperty(value,fileType)) {
      if (value[fileType] !== response.url) {
        onChange({
          [fileType]: {
            type: fileType,
            src: response.url,
          }
        })
      }
    } else {
      for (let prop in value) {
        if (value[prop].src.indexOf(folder) !== -1) {
          onChange({
            ...value,
            [fileType]: {
              type: fileType,
              src: response.url,
            }
          });
          return;
        }
      }
      onChange({
        [fileType]: {
          type: fileType,
          src: response.url,
        }
      })
    }
  };

  uploadFile = e => {

    const fileTypeRegexp = /[.mp4|.ogg|.webm]/g;
    const fileType = e.target.files[0].type;
    const folder = e.target.files[0].name.replace(fileTypeRegexp, '');

    this.setState({
      isLoading: true,
    });
    const formData = new FormData();

    formData.append('file', e.target.files[0]);
    formData.append('folder', folder);

    // let response = fakeUploadFileServer(formData);


    fetch(`${config.base}${config.api.fileupload}`,
      {
        credentials: 'include',
        method: 'POST',
        body: formData
      })
      .then(response => {
        console.log('response: ', response);
        if (response.status >= 400) {
          this.setState({
            isLoading: false,
            errorSubmit: response.statusText,
          })
        }
        return response.json();
      })
      .then(response => {
        console.log('response: ', response);
        if (response.status === 'ok') {
          this.setNewVideoInStore(response, fileType, folder);
        } else {
          this.setState({
            isLoading: false,
            errorSubmit: 'Неизвестная ошибка',
          })
        }
      })
      .catch(error => {
        console.error(error);
        this.setState({
          isLoading: false,
        })
      })
  };


  render() {
    const {isLoading, errorSubmit} = this.state;
    console.log(this.state);
    return (<UploadFileButton
      label={<FormattedMessage
        id='button.loadingVideo'
        defaultMessage='button.loadingVideo'
      />}
      isLoading={isLoading}
      errorSubmit={errorSubmit}
      uploadFile={this.uploadFile}
      accept={"video/mp4,video/ogg,video/webm"}
    />)
  }

}

export default UploadVideo;
