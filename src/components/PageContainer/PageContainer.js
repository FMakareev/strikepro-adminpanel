import React from 'react';
import {Card, CardBlock, CardHeader, Col, Row, CardFooter} from "reactstrap";
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
        <CardBlock className={'card-body'}>
          {children}
        </CardBlock>
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
