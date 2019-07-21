import React, {Component} from 'react';
import {Field, Form, getFormValues, reduxForm, SubmissionError} from "redux-form";
import {Alert, Button, Col, Label, Row} from "reactstrap";
import {connect as connectRestEasy} from "@brigad/redux-rest-easy";
import {withRouter} from "react-router-dom";

import {
  CreateStaticPageAction,
  isRetrievingCreateStaticPage,
  isRetrievingUpdateStaticPage, UpdateStaticPageAction
} from "../../../../../../store/reduxRestEasy/StaticPage/StaticPageResource";
import {normalizeSubmissionError} from "../../../../../../helpers/normalizeSubmissionError";
import {TextField} from "../../../../../../components/TextField/TextField";
import {OGMetaFields} from "../OGMetaFields/OGMetaFields";
import {MetaFields} from "../MetaFields/MetaFields";
import FormSelect from "../../../../../../components/Form/FormSelect";
import FormCKEditor from "../../../../../../components/Form/form_ckeditor";
import {URLAliasField} from "../../../../../../components/URLAliaseField/URLAliaseField";
import {connect} from "react-redux";
import {hasOwnProperty} from "../../../../../../helpers/hasOwnProperty";
import {defineMessages, FormattedMessage} from "react-intl";
import {maxLength} from "../../../../../../validation/maxLength";
import {GetMessageFromIntl} from "../../../../../../helpers/GetMessageFromIntl";
import PageContainer from "../../../../../../components/PageContainer/PageContainer";
import {URIValidation} from "../../../../../../validation/URIValidation";


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
    const {handleSubmit, values, error, intl, reset} = this.props;
    return (<form onSubmit={handleSubmit(this.onSubmit)}>
      <PageContainer
        header={<FormattedMessage
          id={values && values.id ? "staticPages.editor.title" : "staticPages.create.title"}
        />}
        footer={<React.Fragment>
          <Button
            color="primary"
            type="submit"
            className="px-4"
          >
            <FormattedMessage
              id="button.save"
            />
          </Button>
          <Button
            type="reset"
            onClick={reset}
            color="danger"
          >
            <i className="fa fa-ban"/>
            <FormattedMessage
              id="button.reset"
              defaultMessage="button.reset"
            />
          </Button>
        </React.Fragment>}
      >
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
            />
          </Col>
          <Col xs="12">
            <Label>
              <FormattedMessage
                id="form.label.urlAlias"
              />
            </Label>
            <Field
              /** если есть id в состоянии формы значит мы редактируем статью, в таком случае автогенерация отключается */
              isAutoGenTransliteration={!(values && values.id)}
              name="alias_url"
              component={URLAliasField}
              type="text"
              subscribeField={'title'}
              formValues={values}
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
              data={[
                {
                  id: "INACTIVE",
                  name: GetMessageFromIntl(intl, `publishStatus.INACTIVE`),
                }, {
                  id: "ACTIVE",
                  name: GetMessageFromIntl(intl, `publishStatus.ACTIVE`),
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
                <FormattedMessage
                  id={error}
                />
              </Alert>
            </Col>
          </Row>
        }
      </PageContainer>

    </form>);
  }
}

const maxLength255 = (value) => {
  let result = maxLength('validation.maxLength')(255)(value);
  if (result) {
    return defineMessages({
      maxLength: {
        id: "validation.maxLength",
        defaultMessage: "validation.maxLength",
      },
    })
  }
  return null;
};
const validate = (values, {intl}) => {
  const errors = {};

  if (!values.body) {
    errors.body = GetMessageFromIntl(intl, 'validation.required');
  }

  if (!values.excerpt) {
    errors.excerpt = GetMessageFromIntl(intl, 'validation.required');
  }

  if (!values.title) {
    errors.title = GetMessageFromIntl(intl, 'validation.required');
  }
  if (values.alias_url) {
    let res = URIValidation('validation.URIValidation')(values.alias_url);
    if (res) {
      errors.alias_url = GetMessageFromIntl(intl, res);
    }
  }

  if (values.meta_description) {
    let res = maxLength255(values.meta_description);
    if (res) {
      errors.meta_description = GetMessageFromIntl(intl, res.maxLength, {count: 255});
    }
  }

  if (values.meta_title) {
    let res = maxLength255(values.meta_title);
    if (res) {
      errors.meta_title = GetMessageFromIntl(intl, res.maxLength, {count: 255});
    }
  }

  if (values.meta_keywords) {
    let res = maxLength255(values.meta_keywords);
    if (res) {
      errors.meta_keywords = GetMessageFromIntl(intl, res.maxLength, {count: 255});
    }
  }

  if (values.og_type) {
    let res = maxLength255(values.og_type);
    if (res) {
      errors.og_type = GetMessageFromIntl(intl, res.maxLength, {count: 255});
    }
  }

  if (values.og_title) {
    let res = maxLength255(values.og_title);
    if (res) {
      errors.og_title = GetMessageFromIntl(intl, res.maxLength, {count: 255});
    }
  }
  if (values.og_image) {
    let res = maxLength255(values.og_image);
    if (res) {
      errors.og_image = GetMessageFromIntl(intl, res.maxLength, {count: 255});
    }
  }
  if (values.og_url) {
    let res = maxLength255(values.og_url);
    if (res) {
      errors.og_url = GetMessageFromIntl(intl, res.maxLength, {count: 255});
    }
  }

  return errors
};

FormStaticPage = connect(state => ({
  values: getFormValues('FormStaticPage')(state),
}))(FormStaticPage);

FormStaticPage = reduxForm({
  form: 'FormStaticPage',
  validate
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
