import React, {Component} from "react";
import {Container, Row, Col, CardGroup, Card, CardBlock} from "reactstrap";
import LoginForm from "./LoginForm";
import CustomReactRedirect from "../../../components/CustomReactRedirect/CustomReactRedirect";
import {FormattedMessage} from "react-intl";

export class Login extends Component {
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup className="mb-0">
                <Card className="p-4">
                  <CardBlock className="card-body">
                    <h1>
                      <FormattedMessage
                        id='auth.login.title'
                      />
                    </h1>
                    <p className="text-muted">
                      <FormattedMessage
                        id='auth.login.subtitle'
                      />
                    </p>
                    <LoginForm/>
                  </CardBlock>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
        <CustomReactRedirect/>
      </div>
    );
  }
}

export default Login;

