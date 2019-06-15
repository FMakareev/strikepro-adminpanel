import React from 'react';
import PropTypes from 'prop-types';
import {Button} from "reactstrap";


export const DeleteButton = ({onDelete, label, confirmMessage}) => (<Button
  color="danger"
  onClick={() => {
    if (window.confirm(confirmMessage)) {
      onDelete();
    }
  }}>
  {label}
</Button>);


DeleteButton.propTypes = {
  label: PropTypes.string,
  confirmMessage: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
};

DeleteButton.defaultProps = {
  label: "Удалить",
  confirmMessage: "Вы уверены что хотите удалить?",
};


export default DeleteButton;
