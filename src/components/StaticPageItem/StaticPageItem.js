import {Badge, Button, Card, CardBody, CardFooter, CardText, CardTitle} from "reactstrap";
import {Link} from "react-router-dom";
import React from "react";
import DeleteButton from "../DeleteButton/DeleteButton";
import {FormattedMessage} from "react-intl";


export const StaticPageItem = ({title, excerpt, id, status, onDelete}) => (<Card>
  <CardBody>
    <CardTitle>
      {title}
    </CardTitle>
    <CardText>{excerpt}</CardText>
  </CardBody>
  <CardFooter className="text-muted">
    <Button color="warning">
      <Link to={`/static-page-editor/${id}`}>
        <FormattedMessage
          id='button.change'
          defaultMessage='button.change'
        />
      </Link>
    </Button>
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
    <Badge color="success" className="float-right">
      <FormattedMessage
        id={`publishStatus.${status}`}
        defaultMessage={`publishStatus.${status}`}
      />
    </Badge>
  </CardFooter>
</Card>);

export default StaticPageItem;
