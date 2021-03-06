import React from 'react'
import {Button, FormFeedback, FormGroup} from "reactstrap";
import {FormattedMessage} from "react-intl";

export const UploadFileButton = ({
                                   isLoading,
                                   uploadFile,
                                   accept,
                                   label,
                                   errorSubmit
                                 }) => (<FormGroup>
  <Button
    style={{
      position: 'relative',
    }}
    type={'button'}
    block
    color="primary"
  >
    <input
      accept={accept}
      type='file'
      style={{
        opacity: '0',
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        width: '100%'
      }}
      onChange={uploadFile}
      multiple
    />
    {
      !isLoading &&
      <i className="fa fa-upload"/>
    }
    {
      isLoading &&
      <i className="fa fa-spin fa-circle-o-notch"/>
    }
    &nbsp;{label}
  </Button>
  {
    errorSubmit &&
    <FormFeedback
      className={errorSubmit ? 'btn-block' : ''}
    >
      <FormattedMessage
        id={errorSubmit}
      />
    </FormFeedback>
  }
</FormGroup>);


UploadFileButton.defaultProps = {
  label: 'Загрузить',
  isLoading: false,
  errorSubmit: null,
  accept: '',
};

export default UploadFileButton;
