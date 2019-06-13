import React from 'react';
import {Button} from "reactstrap";
import {Link} from "react-router-dom";


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
        Изменить
      </Link>
    </Button>
    {' '}
    <Button
      color="danger"
      onClick={() => {
        onDelete(id)
      }}
    >
      Удалить
    </Button>
  </td>
</tr>);

export default CategoryItem;
