import React, {Component} from 'react';
import {Field, Form, getFormValues, reduxForm, SubmissionError} from "redux-form";
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
import {URLAliasField} from "../../../../../../components/URLAliaseField/URLAliaseField";
import {URIValidation} from "../../../../../../validation/URIValidation";
import {connect} from "react-redux";
import {hasOwnProperty} from "../../../../../../helpers/hasOwnProperty";
import {FormattedMessage} from "react-intl";


export class FormStaticPage extends Component {

  onSubmit = (values) => {
    const {history} = this.props;
    if (hasOwnProperty(values, 'id')) {
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
    const {handleSubmit, values, error, intl} = this.props;
    return (<Form onSubmit={handleSubmit(this.onSubmit)}>
      <Row>
        <Col xs="12">
          <Field
            name="title"
            component={TextField}
            label={<FormattedMessage
              id="form.label.title"
              defaultMessage="form.label.title"
            />}
            type="text"
            validate={[required]}
          />
        </Col>
        <Col xs="12">
          <Field
            name="excerpt"
            component={TextField}
            label={<FormattedMessage
              id="form.label.introductory"
              defaultMessage="form.label.introductory"
            />}
            type="textarea"
            validate={[required]}
          />
        </Col>
        <Col xs="12">
          <Field
            /** если есть id в состоянии формы значит мы редактируем статью, в таком случае автогенерация отключается */
            isAutoGenTransliteration={!(values && values.id)}
            name="alias_url"
            component={URLAliasField}
            label={<FormattedMessage
              id="form.label.urlAlias"
            />}
            type="text"
            subscribeField={'title'}
            formValues={values}
            validate={[URIValidation]}
          />
        </Col>
        <Col xs="12" md="6">
          <Field
            name="status"
            component={FormSelect}
            label={<FormattedMessage
              id="form.label.publishStatus"
            />}
            type="select"
            defaultValue={'INACTIVE'}
            validate={[required]}
            data={[
              {
                id: "INACTIVE",
                name: intl && intl.messages[`publishStatus.INACTIVE`]
              }, {
                id: "ACTIVE",
                name: intl && intl.messages[`publishStatus.ACTIVE`]
              }
            ]}
          />
        </Col>

        <Col xs="12" md="6">
          <Field
            name="image"
            component={TextField}
            label={<FormattedMessage
              id="form.label.linkPreviewImage"
            />}
            description={<FormattedMessage
              id="form.description.linkPreviewImage"
            />}
            type="text"
          />
        </Col>
        <Col xs="12" md="6">
          <Field
            name="parent_id"
            component={TextField}
            label={<FormattedMessage
              id="form.label.parentID"
            />}
            type="text"
          />
        </Col>
        <Col xs="12">
          <Field
            name="body"
            component={FormCKEditor}
            label={<FormattedMessage
              id="form.label.HTMLContent"
            />}
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
              >
                <FormattedMessage
                  id="button.save"
                />
              </Button>
            </FormGroup>
          </div>
        </Col>
      </Row>
    </Form>);
  }
}


FormStaticPage = connect(state => ({
  values: getFormValues('FormStaticPage')(state),
}))(FormStaticPage);

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
