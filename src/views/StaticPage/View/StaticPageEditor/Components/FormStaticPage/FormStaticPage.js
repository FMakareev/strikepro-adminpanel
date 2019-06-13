import React, {Component} from 'react';
import {Field, Form, reduxForm, SubmissionError} from "redux-form";
import {Alert, Button, Col, FormGroup, Row} from "reactstrap";
import {connect as connectRestEasy} from "@brigad/redux-rest-easy";
import {withRouter} from "react-router-dom";

import {
  CreateStaticPageAction,
  isRetrievingCreateStaticPage,
  isRetrievingUpdateStaticPage, UpdateStaticPageAction
} from "../../../../../../store/reduxRestEasy/StaticPage/StaticPageResource";
import {normalizeSubmissionError} from "../../../../../../helpers/normalizeSubmissionError";
import {TextField} from "../../../../../../components/TextField/TextField";
import {required} from "../../../../../../validation/required";
import {OGMetaFields} from "../OGMetaFields/OGMetaFields";
import {MetaFields} from "../MetaFields/MetaFields";
import FormSelect from "../../../../../../components/Form/FormSelect";
import FormCKEditor from "../../../../../../components/Form/form_ckeditor";


export class FormStaticPage extends Component {

  onSubmit = (values) => {
    const {history} = this.props;
    if (values.hasOwnProperty('id')) {
      return this.props.UpdateAction({
        body: values,
        urlParams: {
          id: values.id,
        }
      })
        .then(({normalizedPayload}) => {
          if (normalizedPayload && normalizedPayload.errors) {
            throw normalizedPayload;
          }
          history.push('/static-page-list');
        })
        .catch(error => {
          throw new SubmissionError(normalizeSubmissionError(error));
        })
    } else {
      return this.props.CreateAction({
        body: values,
      })
        .then(({normalizedPayload}) => {
          if (normalizedPayload && normalizedPayload.errors) {
            throw normalizedPayload;
          }
          history.push('/static-page-list');
        })
        .catch(error => {
          throw new SubmissionError(normalizeSubmissionError(error));
        })
    }
  };

  render() {
    const {handleSubmit, error} = this.props;
    return (<Form onSubmit={handleSubmit(this.onSubmit)}>
      <Row>
        <Col xs="12">
          <Field
            name="title"
            component={TextField}
            label="Заголовок страницы"
            type="text"
            validate={[required]}
          />
        </Col>
        <Col xs="12">
          <Field
            name="excerpt"
            component={TextField}
            label="Водный текст страницы"
            type="text"
            validate={[required]}
          />
        </Col>

        <Col xs="12" md="6">
          <Field
            name="status"
            component={FormSelect}
            label="Статус"
            type="select"
            defaultValue={'INACTIVE'}
            validate={[required]}
            data={[
              {
                id: "INACTIVE",
                name: "Не активна"
              }, {
                id: "ACTIVE ",
                name: "Активна"
              }
            ]}
          />
        </Col>

        <Col xs="12" md="6">
          <Field
            name="image"
            component={TextField}
            label="Ссылка на превью изображение страницы"
            description={'(используется в плитках)'}
            type="text"
            validate={[required]}
          />
        </Col>
        <Col xs="12" md="6">
          <Field
            name="parent_id"
            component={TextField}
            label="ID страницы предка"
            type="text"
          />
        </Col>
        <Col xs="12">
          <Field
            name="body"
            component={FormCKEditor}
            label="HTML содержимое страницы"
            type="text"
            validate={[required]}
          />
        </Col>
        <MetaFields/>

        <OGMetaFields/>
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
    </Form>);
  }
}

FormStaticPage = reduxForm({
  form: 'FormStaticPage'
})(FormStaticPage);

FormStaticPage = connectRestEasy(
  (state, ownProps) => ({
    isRetrievingCreate: isRetrievingCreateStaticPage(state, ownProps),
    isRetrievingUpdate: isRetrievingUpdateStaticPage(state, ownProps),
  }),
  dispatch => ({
    CreateAction: (options) => dispatch(CreateStaticPageAction(options)),
    UpdateAction: (options) => dispatch(UpdateStaticPageAction(options)),
  })
)(FormStaticPage);

FormStaticPage = withRouter(FormStaticPage);

export default FormStaticPage;
