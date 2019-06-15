import React from 'react';
import {Button} from "reactstrap";
import {Link} from "react-router-dom";
import DeleteButton from "../DeleteButton/DeleteButton";


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
    <DeleteButton onDelete={()=>onDelete(id)}/>
  </td>
</tr>);

export default CategoryItem;
