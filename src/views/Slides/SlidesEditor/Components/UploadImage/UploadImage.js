import React, {Component} from 'react';
import UploadFile from "../UploadFile/UploadFile";
import config from "../../../../../config";


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
        return response.text();
      })
      .then(response => {
        console.log('response: ', response);
        response = JSON.parse(response);
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

    return (<UploadFile
      label={'Загрузка изображений'}
      isLoading={isLoading}
      errorSubmit={errorSubmit}
      uploadFile={this.uploadFile}
      accept={"image/jpeg, image/pjpeg, image/png"}
    />)
  }

}

export default UploadImage;
