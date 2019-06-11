import React from 'react';
import {Button} from "reactstrap";
import {Link} from "react-router-dom";

const invertColor = (hexTripletColor) => {
  let color = hexTripletColor;
  if(color){
    color = color.substring(1); // remove #
    color = parseInt(color, 16); // convert to integer
    color = 0xFFFFFF ^ color; // invert three bytes
    color = color.toString(16); // convert to hex
    color = ("000000" + color).slice(-6); // pad with leading zeros
    color = "#" + color; // prepend #
  }
  return color;
};

export const TileItem = ({
                           onDelete,
                           id,
                           resource_id,
                           resource_type,
                           created_at,
                           updated_at,
                           public_at,
                           background_color,
                           cols,
                         }) => (

  <tr>
    <td>{id}</td>
    <td>{resource_id}</td>
    <td>{resource_type}</td>
    <td>{created_at}</td>
    <td>{updated_at}</td>
    <td>{public_at}</td>
    <td style={{
      backgroundColor: background_color,
      color: invertColor(background_color),
      textAlign: 'center',
      verticalAlign: 'middle',
    }}>{background_color}</td>
    <td>{cols}</td>
    <td>
      <Button color="warning">
        <Link
          to={`/tile-editor/${id}`}
        >
          Изменить
        </Link>
      </Button>
      {' '}
      <Button
        color="danger"
        onClick={() => {
          onDelete && onDelete(id)
        }}
        size="sm"
      >
        Удалить
      </Button>
    </td>
  </tr>
);

export default TileItem;
