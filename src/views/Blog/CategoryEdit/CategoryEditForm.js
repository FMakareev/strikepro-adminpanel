import React, {Component} from 'react';
import {Field, reduxForm, SubmissionError} from "redux-form";
import {withRouter} from "react-router-dom";

import {Alert, Button, Card, CardBlock, CardFooter, CardHeader, Col, Row} from "reactstrap";
import 'whatwg-fetch'


import {TextField} from "../../../components/TextField/TextField";
import {connect as connectRestEasy} from "@brigad/redux-rest-easy";
import {
  CreateCategoryAction,
  UpdateCategoryAction,
  isRetrievingCreateCategory,
  isRetrievingUpdateCategory,
} from "../../../store/reduxRestEasy/Blog/BlogCategoryResource";
import {normalizeSubmissionError} from "../../../helpers/normalizeSubmissionError";


const required = value => (value ? undefined : 'Обязательно для заполнения');


export class CategoryEditForm extends Component {

  constructor(props) {
    super(props);
    this.state = this.initialState;
  }

  get initialState() {
    return {}
  }

  onSubmit = (values) => {
    const {history} = this.props;
    if (values.hasOwnProperty('id')) {
      return this.props.UpdateCategoryAction({
        body: values,
        urlParams: {
          id: values.id,
        }
      })
        .then(({normalizedPayload}) => {
          if (normalizedPayload && normalizedPayload.errors) {
            throw normalizedPayload;
          }
          history.push('/categories');
        })
        .catch(error => {
          throw new SubmissionError(normalizeSubmissionError(error));
        })
    } else {
      return this.props.CreateCategoryAction({
        body: values,
      })
        .then(({normalizedPayload}) => {
          if (normalizedPayload && normalizedPayload.errors) {
            throw normalizedPayload;
          }
          history.push('/categories');
        })
        .catch(error => {
          throw new SubmissionError(normalizeSubmissionError(error));
        })
    }
  };

  render() {
    const {error, handleSubmit, pristine, reset, submitting} = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
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
                      component={TextField}
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
                <Button
                  type="submit"
                  color="primary"
                  disabled={pristine || submitting}
                >
                  <i className="fa fa-dot-circle-o"/> Сохранить
                </Button>
                <Button
                  type="reset"
                  onClick={reset}
                  color="danger"
                >
                  <i className="fa fa-ban"/> Сброс
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

CategoryEditForm = connectRestEasy(
  (state, ownProps) => ({
    isRetrievingCreateCategory: isRetrievingCreateCategory(state, ownProps),
    isRetrievingUpdateCategory: isRetrievingUpdateCategory(state, ownProps),
  }),
  dispatch => ({
    CreateCategoryAction: (options) => dispatch(CreateCategoryAction(options)),
    UpdateCategoryAction: (options) => dispatch(UpdateCategoryAction(options)),
  })
)(CategoryEditForm);

CategoryEditForm = withRouter(CategoryEditForm);
export default CategoryEditForm;
