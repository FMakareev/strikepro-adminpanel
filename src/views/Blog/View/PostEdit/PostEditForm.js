import React, {Component} from 'react';
import {Alert, Button, Col, FormGroup, Row} from "reactstrap";
import {Field, reduxForm, SubmissionError} from "redux-form";

import FormSelect from "../../../../components/Form/FormSelect";
import FormDateTimePicker from "../../../../components/FormDateTimePicker/FormDateTimePicker";
import FormCKEditor from "../../../../components/Form/form_ckeditor";
import {FormTagInput} from "../../../../components/Form/FormTagInput";
import {TextField} from "../../../../components/TextField/TextField";
import {connect as connectRestEasy} from "@brigad/redux-rest-easy";
import {
  CreatePostAction, isRetrievingCreatePost,
  isRetrievingGetPost,
  UpdatePostAction,
} from "../../../../store/reduxRestEasy/Blog/BlogPostResource";
import {withRouter} from "react-router-dom";
import {normalizeSubmissionError} from "../../../../helpers/normalizeSubmissionError";
import {required} from "../../../../validation/required";
import MetaFields from "./Components/MetaFields/MetaFields";
import OGMetaFields from "./Components/OGMetaFields/OGMetaFields";


export class PostEditForm extends Component {

  constructor(props) {
    super(props);
    this.state = this.initialState;
  }

  get initialState() {
    return {}
  }


  onSubmit = (values) => {
    console.log('values: ', values);
    const {history} = this.props;
    if (values.hasOwnProperty('id')) {
      return this.props.UpdatePostAction({
        body: values,
        urlParams: {
          id: values.id,
        }
      })
        .then(({normalizedPayload}) => {
          if (normalizedPayload && normalizedPayload.errors) {
            throw normalizedPayload;
          }
          history.push('/posts');
        })
        .catch(error => {
          throw new SubmissionError(normalizeSubmissionError(error));
        })
    } else {
      return this.props.CreatePostAction({
        body: values,
      })
        .then(({normalizedPayload}) => {
          if (normalizedPayload && normalizedPayload.errors) {
            throw normalizedPayload;
          }
          history.push('/posts');
        })
        .catch(error => {
          throw new SubmissionError(normalizeSubmissionError(error));
        })
    }
  };


  render() {
    const {error, handleSubmit, categories} = this.props;


    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <Row>
          <Col xs="12">
            <Field
              name="title"
              component={TextField}
              label="Заголовок"
              validate={[required]}
              type="text"
            />
          </Col>
          <Col xs="12" md="12" lg="12">
            <Field
              name="excerpt"
              component={TextField}
              label="Вводный текст статьи"
              validate={[required]}
              type="textarea"
            />
          </Col>
          <Col xs="12" md="6" >
            <Field
              name="alias_url"
              component={TextField}
              label="URL псевдоним статьи"
              type="text"
              validate={[required]}
            />
          </Col>
          <Col xs="12" md="6" >
            <Field
              name="category_id"
              component={FormSelect}
              label="Категория"
              validate={[required]}
              type="select"
              defaultValue={''}
              data={categories}
            />
          </Col>
          <Col xs="12" md="6" >
            <Field
              name="status"
              component={FormSelect}
              label="Статус публикации"
              type="select"
              defaultValue={'DRAFT'}
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
          <Col xs="12" md="6" >
            <Field
              name="public_at"
              component={FormDateTimePicker}
              label="Время публикации"
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

      </form>
    )
  }
}


PostEditForm = reduxForm({
  form: 'PostEditForm'
})(PostEditForm);


PostEditForm = connectRestEasy(
  (state, ownProps) => ({
    isRetrievingGetPost: isRetrievingGetPost(state, ownProps),
    isRetrievingCreatePost: isRetrievingCreatePost(state, ownProps),
  }),
  dispatch => ({
    CreatePostAction: (options) => dispatch(CreatePostAction(options)),
    UpdatePostAction: (options) => dispatch(UpdatePostAction(options)),
  })
)(PostEditForm);

PostEditForm = withRouter(PostEditForm);

export default PostEditForm;
