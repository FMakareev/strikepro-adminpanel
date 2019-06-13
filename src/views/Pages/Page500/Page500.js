import React, { Component } from 'react';
<<<<<<< HEAD
import { Button, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
=======
import {Button, Col, Container, Row} from 'reactstrap';
import {Link} from "react-router-dom";
>>>>>>> a3180f5da718ac899fb9f404f73e60e692dcadbe

class Page500 extends Component {
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <span className="clearfix">
                <h1 className="float-left display-3 mr-4">500</h1>
                <h4 className="pt-3">Houston, we have a problem!</h4>
                <p className="text-muted float-left">
                  The page you are looking for is temporarily unavailable.
                  <br/>
                  <br/>
                  <Link to={'/'}>
                    <Button color="info">На главную</Button>
                  </Link>
                </p>
              </span>
<<<<<<< HEAD
              <InputGroup className="input-prepend">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fa fa-search"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input size="16" type="text" placeholder="What are you looking for?" />
                <InputGroupAddon addonType="append">
                  <Button color="info">Search</Button>
                </InputGroupAddon>
              </InputGroup>
=======
>>>>>>> a3180f5da718ac899fb9f404f73e60e692dcadbe
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Page500;
