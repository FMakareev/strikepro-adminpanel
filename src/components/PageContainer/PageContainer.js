import React from 'react';
import {Card, CardBody, CardHeader, Col, Row, CardFooter} from "reactstrap";

export const PageContainer = ({header, children, footer}) => (<div className="animated fadeIn">
  <Row>
    <Col xs="12">
      <Card>
        {
          header &&
          <CardHeader>
            <strong>
              {header}
            </strong>
          </CardHeader>
        }
        <CardBody className={'card-body'}>
          {children}
        </CardBody>
        {
          footer &&
          <CardFooter className={'card-footer'}>
            {footer}
          </CardFooter>
        }
      </Card>
    </Col>
  </Row>
</div>);


export default PageContainer;
