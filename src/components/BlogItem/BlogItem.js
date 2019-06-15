import {Badge, Button, Card, CardBody, CardFooter, CardText, CardTitle} from "reactstrap";
import {Link} from "react-router-dom";
import React from "react";
import DeleteButton from "../DeleteButton/DeleteButton";


export const BlogItem = ({title, excerpt, id, status, onDelete}) => (<Card>
  <CardBody>
    <CardTitle>
      {title}
    </CardTitle>
    <CardText>{excerpt}</CardText>
  </CardBody>
  <CardFooter className="text-muted">
    <Button color="warning">
      <Link to={`/post-editor/${id}`}>Изменить</Link>
    </Button>
    <DeleteButton onDelete={()=>onDelete(id)}/>
    <Badge color="success" className="float-right">{status}</Badge>
  </CardFooter>
</Card>);

export default BlogItem;
