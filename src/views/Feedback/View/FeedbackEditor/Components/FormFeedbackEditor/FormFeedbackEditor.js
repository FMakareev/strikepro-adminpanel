import React, {Component} from 'react';
import {reduxForm, Form, Field} from "redux-form";
import {connect as connectRestEasy} from "@brigad/redux-rest-easy";
import {withRouter} from "react-router-dom";
import {Alert, Button, Col, Row} from "reactstrap";
import {TextField} from "../../../../../../components/TextField/TextField";


import PageContainer from "../../../../../../components/PageContainer/PageContainer";
import {createSubmitHandler} from "../../../../../../helpers/createSubmitHandler";
import {
  CreateFeedbackAction,
  isRetrievingCreateFeedback
} from "../../../../../../store/reduxRestEasy/Feedback/FeedbackResource";


export class FormFeedbackEditor extends Component {

  onSubmit = async (values) => {
    console.log('values: ', values);
    const {history, CreateFeedbackAction} = this.props;

    await createSubmitHandler(CreateFeedbackAction)({body: values});

    history.push('/feedback');
  };

  render() {
    const {error, handleSubmit, pristine, reset, submitting} = this.props;
    return (<Form onSubmit={handleSubmit(this.onSubmit)}>
      <PageContainer
        header={'Редактор обращений'}
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
          <Col xs="3">
            <Field
              name="name"
              component={TextField}
              label="name"
              type="text"
            />
          </Col>
          <Col xs="3">
            <Field
              name="email"
              component={TextField}
              label="email"
              type="text"
            />
          </Col>
          <Col xs="3">
            <Field
              name="telephone"
              component={TextField}
              label="telephone"
              type="text"
            />
          </Col>
          <Col xs="3">
            <Field
              name="message"
              component={TextField}
              label="message"
              type="text"
            />
          </Col>
          <Col xs="3">
            <Field
              name="status"
              component={TextField}
              label="status"
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
      </PageContainer>
    </Form>)
  }
}

FormFeedbackEditor = reduxForm({
  form: 'FormFeedbackEditor'
})(FormFeedbackEditor);

FormFeedbackEditor = connectRestEasy(
  (state, ownProps) => ({
    isRetrievingCreateFeedback: isRetrievingCreateFeedback(state, ownProps),
  }),
  dispatch => ({
    CreateFeedbackAction: (options) => dispatch(CreateFeedbackAction(options)),
  })
)(FormFeedbackEditor);

FormFeedbackEditor = withRouter(FormFeedbackEditor);


export default FormFeedbackEditor;
