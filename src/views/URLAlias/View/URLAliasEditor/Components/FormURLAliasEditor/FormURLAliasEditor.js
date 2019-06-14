import React, {Component} from 'react';
import {reduxForm, Form, Field, SubmissionError} from "redux-form";
import {connect as connectRestEasy} from "@brigad/redux-rest-easy";
import {withRouter} from "react-router-dom";
import {Alert, Button, Col, Row} from "reactstrap";
import {TextField} from "../../../../../../components/TextField/TextField";
import {required} from "../../../../../../validation/required";
import {normalizeSubmissionError} from "../../../../../../helpers/normalizeSubmissionError";
import {
  CreateUrlAliasAction,
  isRetrievingCreateUrlAlias,
  isRetrievingUpdateUrlAlias,
  UpdateUrlAliasAction
} from "../../../../../../store/reduxRestEasy/UrlAlias/UrlAliasResource";
import {URIValidation} from "../../../../../../validation/URIValidation";
import PageContainer from "../../../../../../components/PageContainer/PageContainer";


export class FormURLAliasEditor extends Component {


  createUrlAlias = async (values) => {
    const {CreateUrlAliasAction} = this.props;

    const {normalizedPayload} = await CreateUrlAliasAction({
      body: values,
    });
    if (normalizedPayload && normalizedPayload.errors) {
      throw new SubmissionError(normalizeSubmissionError(normalizedPayload));
    }
  };

  updateUrlAlias = async (values) => {
    const {UpdateUrlAliasAction} = this.props;
    const {normalizedPayload} = await UpdateUrlAliasAction({
      body: values,
      urlParams: {
        id: values.id,
      }
    });

    if (normalizedPayload && normalizedPayload.errors) {
      throw new SubmissionError(normalizeSubmissionError(normalizedPayload));
    }
  };


  onSubmit = async (values) => {
    const {history} = this.props;
    if (values.hasOwnProperty('id')) {
      await this.updateUrlAlias(values);
    } else {
      await this.createUrlAlias(values);
    }

    history.push('/url-alias-list');
  };


  render() {
    const {error, handleSubmit, pristine, reset, submitting} = this.props;
    return (<Form onSubmit={handleSubmit(this.onSubmit)}>
      <PageContainer
        header={'Редактор URL псевдонима'}
        footer={<Row>
          <Col xs="auto">
            <Button
              type="submit"
              color="primary"
              disabled={pristine || submitting}
            >
              <i className="fa fa-dot-circle-o"/>
              Сохранить
            </Button>
          </Col>
          <Col xs="auto">
            <Button
              type="reset"
              onClick={reset}
              color="danger"
            >
              <i className="fa fa-ban"/> Сброс
            </Button>
          </Col>
        </Row>}
      >
        <Row>
          <Col xs="12">
            <Field
              name="url"
              component={TextField}
              label="url"
              type="text"
              validate={[required]}
            />
          </Col>
          <Col xs="12">
            <Field
              name="alias_url"
              component={TextField}
              label="alias_url"
              type="text"
              validate={[required, URIValidation]}
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
      </PageContainer>
    </Form>)
  }
}

FormURLAliasEditor = reduxForm({
  form: 'FormURLAliasEditor'
})(FormURLAliasEditor);

FormURLAliasEditor = connectRestEasy(
  (state, ownProps) => ({
    isRetrievingCreateUrlAlias: isRetrievingCreateUrlAlias(state, ownProps),
    isRetrievingUpdateUrlAlias: isRetrievingUpdateUrlAlias(state, ownProps),
  }),
  dispatch => ({
    CreateUrlAliasAction: (options) => dispatch(CreateUrlAliasAction(options)),
    UpdateUrlAliasAction: (options) => dispatch(UpdateUrlAliasAction(options)),
  })
)(FormURLAliasEditor);

FormURLAliasEditor = withRouter(FormURLAliasEditor);


export default FormURLAliasEditor;
