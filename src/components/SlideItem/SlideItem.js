import React from 'react';
import {Badge, Button, Card, CardBlock, CardFooter, CardText} from "reactstrap";
import ReactHtmlParser from "react-html-parser";
import {Link} from "react-router-dom";
import DeleteButton from "../DeleteButton/DeleteButton";
import {FormattedMessage} from "react-intl";


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
        to={`/slides/editor/${id}`}
      >
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
    {
      status && <Badge
        color="success"
        className="float-right"
      >
        <FormattedMessage
          id={`publishStatus.${status}`}
          defaultMessage={`publishStatus.${status}`}
        />
      </Badge>
    }

  </CardFooter>
</Card>);

export default SlideItem;
