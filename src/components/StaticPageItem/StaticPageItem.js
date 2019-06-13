import {Badge, Button, Card, CardBody, CardFooter, CardText, CardTitle} from "reactstrap";
import {Link} from "react-router-dom";
import React from "react";


export const StaticPageItem = ({title, excerpt, id, status, onDelete}) => (<Card>
  <CardBody>
    <CardTitle>
      {title}
    </CardTitle>
    <CardText>{excerpt}</CardText>
  </CardBody>
  <CardFooter className="text-muted">
    <Button color="warning">
      <Link to={`/static-page-editor/${id}`}>Изменить</Link>
    </Button>
    <Button color="danger" onClick={()=>onDelete(id)}>Удалить</Button>
    <Badge color="success" className="float-right">{status}</Badge>
  </CardFooter>
</Card>);

export default StaticPageItem;
