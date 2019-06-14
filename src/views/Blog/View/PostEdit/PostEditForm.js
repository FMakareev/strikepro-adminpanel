import React, {Component} from 'react';
import {Alert, Button, Col, FormGroup, Row} from "reactstrap";
import {Field, getFormValues, reduxForm, SubmissionError} from "redux-form";
import PropTypes from 'prop-types';
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
import {URLAliasField} from "../../../../components/URLAliaseField/URLAliaseField";
import {connect} from "react-redux";
import {URIValidation} from "../../../../validation/URIValidation";
import {CreateUrlAliasAction, UpdateUrlAliasAction} from "../../../../store/reduxRestEasy/UrlAlias/UrlAliasResource";


export class PostEditForm extends Component {

  static propTypes = {
    CreatePostAction: PropTypes.func,
    UpdatePostAction: PropTypes.func,
    CreateUrlAliasAction: PropTypes.func,
    UpdateUrlAliasAction: PropTypes.func,
    URLAlias: PropTypes.shape({
      id: PropTypes.number,
      url: PropTypes.string,
      alias_url: PropTypes.string,
    })
  }

  constructor(props) {
    super(props);
    this.state = this.initialState;
  }

  get initialState() {
    return {}
  }


  /**
   * @param {object} values
   * */
  updateUrlAlias = async (values) => {

  };


  createPost = async (values) => {
    const {CreateUrlAliasAction, UpdateUrlAliasAction, CreatePostAction} = this.props;

    /** STEP 1 */
    const CreateURLAliasData = await CreateUrlAliasAction({
      body: {
        "url": "blog/128",
        "alias_url": "path/to/the/resource-name"
      }
    });
    if (CreateURLAliasData && CreateURLAliasData.errors) {
      throw new SubmissionError(CreateURLAliasData);
    }

    /** STEP 2 */
    const newPost = await CreatePostAction({
      body: values,
    });
    if (newPost && newPost.errors) {
      throw new SubmissionError(newPost);
    }

    /** STEP 3 */
    const UpdateURLAliasData = await UpdateUrlAliasAction({
      body: {
        // TODO: придумать как url формируется
        "url": `blog/${newPost.id}`,
      }
    });
    if (UpdateURLAliasData && UpdateURLAliasData.errors) {
      throw new SubmissionError(UpdateURLAliasData);
    }

  };

  updatePost = async (values) => {
    const {URLAlias, initialValues, UpdateUrlAliasAction, UpdatePostAction} = this.props;

    /** STEP 1 */
    if (values.alias_url !== initialValues.alias_url) {
      const UpdateURLAliasData = await UpdateUrlAliasAction({
        body: {
          ...URLAlias,
          "alias_url": values.alias_url
        }
      });
      if (UpdateURLAliasData && UpdateURLAliasData.errors) {
        throw new SubmissionError(UpdateURLAliasData);
      }
    }

    /** STEP 2 */
    const updatePost = await UpdatePostAction({
      body: values,
      urlParams: {
        id: values.id,
      }
    });

    if (updatePost && updatePost.errors) {
      throw new SubmissionError(updatePost);
    }

  };


  onSubmit = async (values) => {
    console.log('values: ', values);
    const {history} = this.props;
    if (values.hasOwnProperty('id')) {
      await this.updatePost(values);
    } else {
      await this.createPost(values)
    }
    history.push('/posts');
  };


  render() {
    const {error, handleSubmit, categories, values} = this.props;
    console.log(this.props);

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
          <Col xs="12">
            <Field
              name="excerpt"
              component={TextField}
              label="Вводный текст статьи"
              // validate={[required]}
              type="textarea"
            />
          </Col>
          <Col xs="12">
            <Field
              /** если есть id в состоянии формы значит мы редактируем статью, в таком случае автогенерация отключается */
              isAutoGenTransliteration={!(values && values.id)}
              name="alias_url"
              component={URLAliasField}
              label="URL псевдоним статьи"
              type="text"
              subscribeField={'title'}
              formValues={values}
              validate={[URIValidation]}
            />
          </Col>
          <Col xs="12" md="6">
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
          <Col xs="12" md="6">
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
          <Col xs="12" md="6">
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

PostEditForm = connect(state => ({
  values: getFormValues('PostEditForm')(state),
}))(PostEditForm);

PostEditForm = reduxForm({
  form: 'PostEditForm'
})(PostEditForm);


PostEditForm = connectRestEasy(
  (state, ownProps) => ({
    isRetrievingCreatePost: isRetrievingCreatePost(state, ownProps),
  }),
  dispatch => ({
    CreatePostAction: (options) => dispatch(CreatePostAction(options)),
    UpdatePostAction: (options) => dispatch(UpdatePostAction(options)),

    CreateUrlAliasAction: (options) => dispatch(CreateUrlAliasAction(options)),
    UpdateUrlAliasAction: (options) => dispatch(UpdateUrlAliasAction(options)),

  })
)(PostEditForm);

PostEditForm = withRouter(PostEditForm);

export default PostEditForm;
