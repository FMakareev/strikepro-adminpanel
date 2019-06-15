import React from 'react';
import {Badge, Button, Card, CardBlock, CardFooter, CardText} from "reactstrap";
import ReactHtmlParser from "react-html-parser";
import {Link} from "react-router-dom";
import DeleteButton from "../DeleteButton/DeleteButton";


export const SlideItem = ({body, id, onDelete, status}) => (<Card>
  <CardBlock>
    <CardText className={'slides_item'}>
      {ReactHtmlParser(body)}
    </CardText>
  </CardBlock>
  <CardFooter className="text-muted">
    <Button
      color="warning"
    >
      <Link
        to={`/slides-editor/${id}`}
      >
        Изменить
      </Link>
    </Button>

    <DeleteButton onDelete={()=>onDelete(id)}/>
    <Badge
      color="success"
      className="float-right"
    >
      {status}
    </Badge>
  </CardFooter>
</Card>);

export default SlideItem;
