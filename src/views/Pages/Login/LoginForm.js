import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Col, Input, InputGroup, InputGroupAddon, Row, Button, Alert} from "reactstrap";
import {SubmissionError} from "redux-form";
import 'whatwg-fetch'


import config from '../../../config';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

export const required = value => {
    console.log(value);
    return (value ? undefined : 'Обязательно для заполнения');
};


class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
    }

    get initialState() {
        return {
            redirect: false
        }
    }
    componentWillMount() {
        this.onLogout()
    }

    onLogout() {
        return fetch(config.base + config.api.logout, {
            method: 'GET',
            credentials: 'include',
            cache: 'no-cache',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        }).then(response => {
            console.log(response);
            if (response.status >= 200 && response.status < 300) {
                return Promise.resolve(response);
            }
            return Promise.reject(response);
        })
            .then((response) => {
                return response.json()
            }).then((response) => {
                localStorage.setItem('user', JSON.stringify(response));
                return response;
            })
            .catch(error => {
                console.error(error);
            });
    }

    onHandleSubmit(values) {
        console.log(values);
        const body = JSON.stringify(values);

        return fetch(config.base + config.api.login, {
            method: 'POST',
            credentials: 'include',
            cache: 'no-cache',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: body
        }).then(response => {
            console.log(response);
            if (response.status >= 200 && response.status < 300) {
                this.setState({ redirect: true });
                return Promise.resolve(response);
            }
            return Promise.reject(response);
        })
            .then((response) => {
                console.log(response);
                return response.json()
            }).then((response) => {
                console.log(response);
                localStorage.setItem('user', JSON.stringify(response));
                return response;
            })
            .catch(error => {
                console.error(error);
                throw new SubmissionError({
                    _error: error.status + ': ' + error.statusText
                });
            });
    }

    renderField({input, label, type, icon, meta: {touched, error}}) {
        return (
            <div className="controls">
                <InputGroup className="mb-3">
                    <InputGroupAddon><i className={icon}></i></InputGroupAddon>
                    <Input type={type} {...input} placeholder={label}/>
                </InputGroup>
                <p className="help-block">{touched && error && <span>{error}</span>}</p>
            </div>
        )
    }

    render() {
        const {error, handleSubmit, pristine, reset, submitting, roles} = this.props;

        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to='/'/>;
        }

        return (
            <form onSubmit={handleSubmit(this.onHandleSubmit)}>
                <Field
                    name="email"
                    component={this.renderField}
                    label="Email"
                    validate={[required]}
                    type="text"
                    icon="icon-user"
                />
                <Field
                    name="password"
                    component={this.renderField}
                    label="Пароль"
                    validate={[required]}
                    type="password"
                    icon="icon-lock"
                />
                <Row>
                    <Col xs="6">
                        <Button color="primary" type="submit" className="px-4"
                                disabled={pristine || submitting}>Войти</Button>
                    </Col>
                    <Col xs="6" className="text-right">
                        <Button color="primary" type="button" onClick={reset} className="px-4"
                                disabled={pristine || submitting}>Очистить форму</Button>
                    </Col>
                </Row>
                {
                    error &&
                    <Alert color="danger">
                        {error}
                    </Alert>
                }
            </form>
        )
    }
}


LoginForm = reduxForm({
    form: 'LoginForm'
})(LoginForm);

LoginForm = connect(
    state => ({ // получаем данные из store
        Store: state
    }), //
    dispatch => ({
        setStore: (type, value) => {
            dispatch({type: type, payload: value})
        }
    }) //
)((LoginForm));

export default LoginForm;