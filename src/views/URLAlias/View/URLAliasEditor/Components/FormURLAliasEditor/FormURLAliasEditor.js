import React, {Component} from 'react';
import {reduxForm, Form, Field} from "redux-form";
import {connect as connectRestEasy} from "@brigad/redux-rest-easy";
import {Link, withRouter} from "react-router-dom";
import {Alert, Button, Col, Row} from "reactstrap";
import {TextField} from "../../../../../../components/TextField/TextField";
import {required} from "../../../../../../validation/required";
import {
  CreateUrlAliasAction,
  isRetrievingCreateUrlAlias,
  isRetrievingUpdateUrlAlias,
  UpdateUrlAliasAction
} from "../../../../../../store/reduxRestEasy/UrlAlias/UrlAliasResource";
import {URIValidation} from "../../../../../../validation/URIValidation";
import PageContainer from "../../../../../../components/PageContainer/PageContainer";
import {hasOwnProperty} from "../../../../../../helpers/hasOwnProperty";
import {createSubmitHandler} from "../../../../../../helpers/createSubmitHandler";
import {FormattedMessage} from "react-intl";


export class FormURLAliasEditor extends Component {

  onSubmit = async (values) => {
    console.log('values: ', values);
    const {history, UpdateUrlAliasAction, CreateUrlAliasAction} = this.props;
    if (hasOwnProperty(values, 'id')) {
      await createSubmitHandler(UpdateUrlAliasAction)({
        body: values,
        urlParams: {
          id: values.id,
        }
      })
    } else {
      await createSubmitHandler(CreateUrlAliasAction)({body: values})
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
              <FormattedMessage
                id="button.save"
                defaultMessage="Save"
              />
            </Button>
          </Col>
          <Col xs="auto">
            <Button
              type="reset"
              onClick={reset}
              color="danger"
            >
              <i className="fa fa-ban"/>
              <FormattedMessage
                id="button.reset"
                defaultMessage="Reset"
              />
            </Button>
          </Col>
        </Row>}
      >
        <Row>
          <Col xs="12">
            <Field
              name="url"
              component={TextField}
              label={<FormattedMessage
                id="urlAlias.table.url"
              />}
              type="text"
              validate={[required]}
            />
          </Col>
          <Col xs="12">
            <Field
              name="alias_url"
              component={TextField}
              label={<FormattedMessage
                id="urlAlias.table.alias_url"
              />}
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
