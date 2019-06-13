import {Badge, Button, Card, CardBody, CardFooter, CardText, CardTitle} from "reactstrap";
import {Link} from "react-router-dom";
import React from "react";


<<<<<<< HEAD
export const BlogItem = ({title, excerpt, id, status, onDeletePost}) => (<Card>
=======
export const BlogItem = ({title, excerpt, id, status, onDelete}) => (<Card>
>>>>>>> a3180f5da718ac899fb9f404f73e60e692dcadbe
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
<<<<<<< HEAD
    <Button color="danger" onClick={onDeletePost}>Удалить</Button>
=======
    <Button color="danger" onClick={()=>onDelete(id)}>Удалить</Button>
>>>>>>> a3180f5da718ac899fb9f404f73e60e692dcadbe
    <Badge color="success" className="float-right">{status}</Badge>
  </CardFooter>
</Card>);

export default BlogItem;
