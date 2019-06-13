import React from 'react';
<<<<<<< HEAD
import {Card, CardBlock, CardHeader, Col, Row, CardFooter} from "reactstrap";
=======
import {Card, CardBody, CardHeader, Col, Row, CardFooter} from "reactstrap";
>>>>>>> a3180f5da718ac899fb9f404f73e60e692dcadbe
export const PageContainer =({header, children, footer})=>(<div className="animated fadeIn">
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
<<<<<<< HEAD
        <CardBlock className={'card-body'}>
          {children}
        </CardBlock>
=======
        <CardBody className={'card-body'}>
          {children}
        </CardBody>
>>>>>>> a3180f5da718ac899fb9f404f73e60e692dcadbe
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
