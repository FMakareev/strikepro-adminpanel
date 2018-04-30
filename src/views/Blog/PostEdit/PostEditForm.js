import React, {Component} from 'react';
import {Alert, Button, Col, FormGroup, Row} from "reactstrap";
import {Field, reduxForm, SubmissionError} from "redux-form";
import {connect} from "react-redux";

import config from "../../../config";

import FormInput from '../../../components/Form/form_input';
import FormSelect from "../../../components/Form/form_select";
import FormDateTimePicker from "../../../components/Form/form_data-time-picker";
import FormCKEditor from "../../../components/Form/form_ckeditor";
import onSubmit from "../../../decorators/onSubmit";
import {Redirect} from "react-router-dom";
import {FormTagInput} from "../../../components/Form/form_tag-input";

const required = value => (value ? undefined : 'Обязательно для заполнения');


const minLength = min => value =>
    value && value.length < min ? `Минимум ${min} символов или больше` : undefined;


@onSubmit(config.api.post)
class PostEditForm extends Component {

    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.getCKEditData = this.getCKEditData.bind(this);
    }

    get initialState() {
        return {
            id: null,
            public_at: new Date().toString(),
            redirect: false,
            redirectUrl: '/posts',
        }
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
        this.setState({
            id: this.getParamMatcher('id')
        })
    }

    getCKEditData(event) {
        console.log('getCKEditData', this);
    }

    render() {
        const {error, handleSubmit, pristine, reset, submitting, categories, valid} = this.props;
        const {redirect, redirectUrl} = this.state;

        if (redirect) {
            return <Redirect to={redirectUrl}/>;
        }

        return (
            <form onSubmit={handleSubmit((values) => this.onSubmit(values, this))}>

                <Row>
                    <Col xs="12" md="6" lg="4">
                        <Field
                            name="status"
                            component={FormSelect}
                            label="Статус публикации"
                            type="select"
                            validate={[required]}
                            data={[
                                {
                                    id: "PUBLISHED",
                                    name: "Опубликован"
                                }, {
                                    id: "DRAFT",
                                    name: "Черновик"
                                }, {
                                    id: "PENDING",
                                    name: "Ожидает публикации"
                                }
                            ]}
                        />
                    </Col>
                    <Col xs="12" md="6" lg="4">
                        <Field
                            name="category_id"
                            component={FormSelect}
                            label="Категория"
                            validate={[required]}
                            type="select"
                            data={categories}
                        />
                    </Col>
                    <Col xs="12" md="6" lg="4">
                        <Field
                            name="public_at"
                            component={FormDateTimePicker}
                            label="Время публикации"
                        />
                    </Col>
                    <Col xs="12" md="6" lg="4">
                        <Field
                            name="alias_url"
                            component={FormInput}
                            label="URL псевдоним статьи"
                            type="text"
                            validate={[required]}
                        />
                    </Col>
                    <Col xs="12" md="6" lg="4">
                        <Field
                            name="title"
                            component={FormInput}
                            label="Заголовок"
                            validate={[required]}
                            type="text"
                        />
                    </Col>
                    <Col xs="12" md="12" lg="12">
                        <Field
                            name="excerpt"
                            component={FormInput}
                            label="Вводный текст статьи"
                            validate={[required]}
                            type="textarea"
                        />
                    </Col>
                    <Col xs="12">
                        <Field
                            name="body"
                            component={FormCKEditor}
                            label="Контент"
                            validate={[required]}
                            type="text"
                            ref="CKEDITOR"
                        />
                    </Col>
                    <Col xs="12">
                        <Field
                            name="tags"
                            component={FormTagInput}
                            validate={[required]}
                            label="Тэги"
                        />
                    </Col>
                    <Col xs="12">
                        <h4>
                            META информация
                        </h4>
                    </Col>
                    <Col xs="12">
                        <Field
                            name="meta_keywords"
                            component={FormTagInput}
                            label="Ключевые слова"
                            validate={[required]}
                        />
                    </Col>
                    <Col xs="12">
                        <Field
                            name="meta_description"
                            component={FormInput}
                            label="Описание"
                            validate={[required]}
                            type="textarea"
                        />
                    </Col>
                    <Col xs="12">
                        <h4>
                            OG META (Open Graph)
                        </h4>
                    </Col>
                    <Col xs="12" md="6" lg="4">
                        <Field
                            name="og_title"
                            component={FormInput}
                            label="Заголовок"
                            validate={[required]}
                            type="text"
                        />
                    </Col>
                    <Col xs="12" md="6" lg="4">
                        <Field
                            name="og_type"
                            component={FormInput}
                            label="Тип"
                            validate={[required]}
                            type="text"
                        />
                    </Col>
                    <Col xs="12" md="6" lg="4">
                        <Field
                            name="og_image"
                            component={FormInput}
                            validate={[required]}
                            label="Изображение"
                            type="text"
                        />
                    </Col>
                    <Col xs="12" md="6" lg="4">
                        <Field
                            name="og_url"
                            component={FormInput}
                            validate={[required]}
                            label="Адрес"
                            type="text"
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


PostEditForm = reduxForm({
    form: 'PostEditForm'
})(PostEditForm);

// You have to connect() to any reducers that you wish to connect to yourself
PostEditForm = connect(
    state => ({
        Store: state,
    }),
    dispatch => ({
        setStore: (type, value) => {
            dispatch({type: type, payload: value})
        }
    })
)(PostEditForm);


export default PostEditForm;