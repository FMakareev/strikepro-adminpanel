import React, {Component} from 'react';
import {Col, FormGroup, Row, Button, Alert} from "reactstrap";
import {Field, reduxForm} from "redux-form";
import FormSelect from "../../../components/Form/form_select";
import FormDateTimePicker from "../../../components/Form/form_data-time-picker";
import config from "../../../config";
import onSubmit from "../../../decorators/onSubmit";
import FormInput from "../../../components/Form/form_input";
import FormInputColor from "../../../components/Form/form_input-color";
import {Redirect} from "react-router-dom";


@reduxForm({
    form: 'TileEditorForm'
})
@onSubmit(config.api.tile)
class TileEditorForm extends Component {

    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.onGetTypes = this.onGetTypes.bind(this);
    }


    getParamMatcher(param) {
        let vars = {};
        window.location.href.replace(
            /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
            function (m, key, value) { // callback
                vars[key] = value !== undefined ? value : '';
            }
        );
        if (param) {
            return vars[param] ? '/' + vars[param] : '';
        }
        return vars;
    }

    componentWillMount() {

        this.onGetTypes().then(data => {
            console.log(data);
            if (data !== 401) {
                this.setState({
                    tile_types: this.typeTransform(data)
                })
            }
        });

        this.setState({
            id: this.getParamMatcher('id')
        })
    }

    get initialState() {
        return {
            id: null,
            public_at: new Date(),
            redirect: false,
            redirectUrl: '/tiles',
            tile_types: null
        }
    }

    typeTransform(array) {
        let newArray = [];
        if (array) {
            array.map((item, index) => {
                newArray.push({
                    id: item,
                    name: item
                })
            })
        }
        return newArray;
    }

    onGetTypes() {
        return fetch(config.base + config.api.tile_types, {
            method: 'GET',
            credentials: 'include',
            cache: 'no-cache',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(response => {
            console.log(response);
            if (response.status >= 200 && response.status < 300) {
                return Promise.resolve(response);
            }
            if (response.status > 400) {
                this.setState({redirect: true})
            }
            return Promise.reject(response.status);
        })
            .then((response) => {
                console.log(response);
                return response.json()
            }).then((response) => {
                console.log(response);
                return response
            })
            .catch(error => {
                console.error(error);
                return error;
            });
    }

    render() {
        const {error, handleSubmit, pristine, reset, submitting, categories, valid} = this.props;
        const {redirect, redirectUrl, tile_types} = this.state;

        if (redirect) {
            return <Redirect to={redirectUrl}/>;
        }
        return (
                <form onSubmit={handleSubmit((values) => this.onSubmit(values, this))}>
                    <Row>
                        <Col xs="12" md="6" lg="4">
                            <Field
                                name="resource_id"
                                component={FormInput}
                                label="resource_id"
                                type="text"
                            />
                        </Col>
                        {
                            tile_types &&
                            <Col xs="12" md="6" lg="4">
                                <Field
                                    name="resource_type"
                                    component={FormSelect}
                                    label="resource_type"
                                    type="select"
                                    data={tile_types}
                                />
                            </Col>
                        }
                        <Col xs="12" md="6" lg="4">
                            <Field
                                name="cols"
                                component={FormInput}
                                label="cols"
                                type="text"
                            />
                        </Col>
                        <Col xs="12" md="6" lg="4">
                            <Field
                                name="background_color"
                                component={FormInputColor}
                                label="background_color"
                                type="color"
                            />
                        </Col>
                        <Col xs="12" md="6" lg="4">
                            <Field
                                name="public_at"
                                component={FormDateTimePicker}
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

                    <Row>
                        <Col xs="6">
                            <div className="controls">
                                <FormGroup>
                                    <Button
                                        color="primary"
                                        type="submit"
                                        className="px-4"
                                        // disabled={pristine || submitting}
                                    >Сохранить</Button>
                                </FormGroup>
                            </div>
                        </Col>
                    </Row>
                </form>
        )
    }
}

TileEditorForm.propTypes = {};

TileEditorForm.defaultProps = {};

export {TileEditorForm};