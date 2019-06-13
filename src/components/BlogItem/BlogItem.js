import {Badge, Button, Card, CardBody, CardFooter, CardText, CardTitle} from "reactstrap";
import {Link} from "react-router-dom";
import React from "react";


export const BlogItem = ({title, excerpt, id, status, onDeletePost}) => (<Card>
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
    <Button color="danger" onClick={onDeletePost}>Удалить</Button>
    <Badge color="success" className="float-right">{status}</Badge>
  </CardFooter>
</Card>);

export default BlogItem;
