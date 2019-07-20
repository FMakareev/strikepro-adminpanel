import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {
  Col,
  Row,
  Button,
  Alert,
} from "reactstrap";
import {SubmissionError} from "redux-form";
import 'whatwg-fetch'
import {connect as connectRestEasy} from '@brigad/redux-rest-easy'

import {TextField} from "../../../components/TextField/TextField";
import {AuthGetResource, LoginAction, LoginGetResource, LogoutAction} from "../../../store/reduxRestEasy/Auth/Auth";
import {required} from "../../../validation/required";
import {FormattedMessage, injectIntl} from "react-intl";




export class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = this.initialState;
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
    const {LogoutAction} = this.props;
    return LogoutAction();
  }

  onLogin = (values) => {
    const {LoginAction} = this.props;

    return LoginAction({body: values})
      .then(({normalizedPayload}) => {
        if (normalizedPayload && normalizedPayload.errors) {
          throw normalizedPayload;
        }
      })
      .catch(error => {
        throw new SubmissionError({
          _error: error.message ? error.message[0] : null,
          ...(error.errors && error.errors.email ? {email: error.errors.email[0]} : {}),
          ...(error.errors && error.errors.password ? {password: error.errors.password[0]} : {})
        })
      })
  };


  render() {
    const {error, handleSubmit, pristine, reset, submitting} = this.props;

    return (
      <form onSubmit={handleSubmit(this.onLogin)}>
        <Field
          name="email"
          component={TextField}
          label={ <FormattedMessage
            id='form.label.email'
          />}
          validate={[required]}
          type="text"
          icon="icon-user"
        />
        <Field
          name="password"
          component={TextField}
          label={ <FormattedMessage
            id='form.label.password'
          />}
          validate={[required]}
          type="password"
          icon="icon-lock"
        />
        <Row>
          <Col xs="8">
            <Button
              color="primary"
              type="submit"
              className="px-4"
              disabled={pristine || submitting}
            >
              <FormattedMessage
                id='button.login'
              />
            </Button>
          </Col>
          <Col xs="4" className="text-right">
            <Button
              block
              color="link"
              type="button"
              onClick={reset}
            >
              <FormattedMessage
                id='button.reset'
              />
            </Button>
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



LoginForm = connectRestEasy(
  (state, ownProps) => ({
    LoginGetResource: LoginGetResource(state, ownProps),
    AuthGetResource: AuthGetResource(state, ownProps),
  }),
  dispatch => ({
    LoginAction: body => dispatch(LoginAction(body)),
    LogoutAction: body => dispatch(LogoutAction()),
  })
)(LoginForm);

export default injectIntl(LoginForm);
