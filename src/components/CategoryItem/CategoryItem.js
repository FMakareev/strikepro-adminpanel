import React from 'react';
import {Button} from "reactstrap";
import {Link} from "react-router-dom";
import DeleteButton from "../DeleteButton/DeleteButton";
import {FormattedMessage} from "react-intl";


export const CategoryItem = ({
                               id,
                               name,
                               created_at,
                               updated_at,
                               onDelete
                             }) => (<tr>
  <td>{id}</td>
  <td>{name}</td>
  <td>{created_at}</td>
  <td>{updated_at}</td>
  <td>
    <Button color="warning">
      <Link
        to={`/category-editor/${id}`
        }>
        <FormattedMessage
          id="button.change"
          defaultMessage="Change"
        />
      </Link>
    </Button>
    {' '}
    <DeleteButton
      label={<FormattedMessage
        id="button.delete"
        defaultMessage="Change"
      />}
      confirmMessage={<FormattedMessage
        id="confirmMessage.delete"
        defaultMessage="Are you sure you want to delete?"
      />}
      onDelete={() => onDelete(id)}
    />
  </td>
</tr>);

export default CategoryItem;
