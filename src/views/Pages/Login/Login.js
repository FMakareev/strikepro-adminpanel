import React, {Component} from "react";
import {Container, Row, Col, CardGroup, Card, CardBlock, Button, Input, InputGroup, InputGroupAddon} from "reactstrap";
import {Field, reduxForm} from 'redux-form';
import LoginForm from "./LoginForm";
import {connect} from "react-redux";
import {hasSubmitSucceeded} from "redux-form";

class Login extends Component {


    render() {
        return (
            <div className="app flex-row align-items-center">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="8">
                            <CardGroup className="mb-0">
                                <Card className="p-4">
                                    <CardBlock className="card-body">
                                        <h1>Login</h1>
                                        <p className="text-muted">Sign In to your account</p>
                                        <LoginForm/>
                                    </CardBlock>
                                </Card>
                            </CardGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Login;

