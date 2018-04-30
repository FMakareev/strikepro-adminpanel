import React, {Component} from 'react';
import {Field, reduxForm, SubmissionError} from "redux-form";
import {connect} from "react-redux";
import config from "../../../config";
import {Alert, Button, Card, CardBlock, CardFooter, CardHeader, Col, FormGroup, Input, Label, Row} from "reactstrap";
import 'whatwg-fetch'
import moment from "moment";
import {Redirect} from "react-router-dom";

import FormInput from '../../../components/Form/form_input';
import onSubmit from "../../../decorators/onSubmit";

import history from '../../../history';

const required = value => (value ? undefined : 'Обязательно для заполнения');


@onSubmit(config.api.category)
class CategoryEditForm extends Component {

    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
    }

    get initialState() {
        return {
            id: null,
            redirect: false,
            redirectUrl: '/categories'
        }
    }

    getParamMatcher(param) {
        let vars = {};
        window.location.href.replace(
            /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
            function( m, key, value ) { // callback
                vars[key] = value !== undefined ? value : '';
            }
        );
        if ( param ) {
            return vars[param] ? '/'+vars[param] : '';
        }
        return vars;
    }

    componentWillMount() {
        this.setState({
            id: this.getParamMatcher('id')
        })
    }

    onHandleSubmit(values) {
        console.log(values);
        if (this.state.id !== '') {
            values.updated_at = moment(new Date()).format("YYYY-MM-d h:mm:ss");
        } else {
            values.created_at = moment(new Date()).format("YYYY-MM-d h:mm:ss");
            values.updated_at = moment(new Date()).format("YYYY-MM-d h:mm:ss");
        }


        const body = JSON.stringify(values);


        return fetch(config.base + config.api.category + this.state.id, {
            method: this.state.id !== '' ? 'PUT' : 'POST',
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
                this.setState({redirect: true})
                return Promise.resolve(response);
            }

            return Promise.reject(response);
        })
            .then((response) => {
                console.log(response);
                return response.json()
            }).then((response) => {
                console.log(response);
                return response;
            })
            .catch(error => {
                console.error(error);
                throw new SubmissionError({
                    _error: error.status + ': ' + error.statusText
                });
            });
    }

    render() {
        const {redirect,redirectUrl} = this.state;

        const {error, handleSubmit, pristine, reset, submitting, roles} = this.props;
        if (redirect) {
            return <Redirect to={redirectUrl}/>;
        }

        return (
            <form onSubmit={handleSubmit((values) => this.onSubmit(values, this))}>
                <Row>
                    <Col xs="12">
                        <Card>
                            <CardHeader>
                                <strong>Создать категорию</strong>
                            </CardHeader>
                            <CardBlock className="card-body">
                                <Row>
                                    <Col xs="12">
                                        <Field
                                            name="name"
                                            component={FormInput}
                                            label="Название"
                                            type="text"
                                            validate={[required]}
                                        />
                                    </Col>
                                </Row>
                                {
                                    error &&
                                    <Row>
                                        <Col xs="12">
                                            <Alert color="danger">
                                                {error}
                                            </Alert>
                                        </Col>
                                    </Row>
                                }
                            </CardBlock>
                            <CardFooter>
                                <Button type="submit" size="sm" color="primary" disabled={pristine || submitting}>
                                    <i className="fa fa-dot-circle-o"></i> Сохранить
                                </Button>
                                <Button type="reset" onClick={reset} size="sm" color="danger"
                                        disabled={pristine || submitting}>
                                    <i className="fa fa-ban"></i> Сброс
                                </Button>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
            </form>
        )
    }
}

CategoryEditForm = reduxForm({
    form: 'CategoryEditForm'
})(CategoryEditForm);

CategoryEditForm = connect(
    state => ({ // получаем данные из store
        Store: state
    }), //
    dispatch => ({
        setStore: (type, value) => {
            dispatch({type: type, payload: value})
        }
    }) //
)((CategoryEditForm));


export default CategoryEditForm;