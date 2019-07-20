import React, {Component} from 'react';
import {Alert, Button, Card, CardBlock, CardFooter, CardHeader, Col, FormGroup, Row} from "reactstrap";
import {Field, getFormValues, reduxForm} from "redux-form";
import PropTypes from 'prop-types';
import FormSelect from "../../../../components/Form/FormSelect";
import FormDateTimePicker from "../../../../components/FormDateTimePicker/FormDateTimePicker";
import FormCKEditor from "../../../../components/Form/form_ckeditor";
import {FormTagInput} from "../../../../components/Form/FormTagInput";
import {TextField} from "../../../../components/TextField/TextField";
import {connect as connectRestEasy} from "@brigad/redux-rest-easy";
import {
  CreatePostAction,
  isRetrievingCreatePost,
  isRetrievingGetPost,
  UpdatePostAction,
} from "../../../../store/reduxRestEasy/Blog/BlogPostResource";
import {withRouter} from "react-router-dom";
import {required} from "../../../../validation/required";
import MetaFields from "./Components/MetaFields/MetaFields";
import OGMetaFields from "./Components/OGMetaFields/OGMetaFields";
import {URLAliasField} from "../../../../components/URLAliaseField/URLAliaseField";
import {connect} from "react-redux";
import {URIValidation} from "../../../../validation/URIValidation";
import {CreateUrlAliasAction, UpdateUrlAliasAction} from "../../../../store/reduxRestEasy/UrlAlias/UrlAliasResource";
import {createSubmitHandler} from "../../../../helpers/createSubmitHandler";
import {hasOwnProperty} from "../../../../helpers/hasOwnProperty";
import {FormattedMessage, injectIntl} from "react-intl";


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
  };

  constructor(props) {
    super(props);
    this.state = this.initialState;
  }

  get initialState() {
    return {}
  }


  onSubmit = async (values) => {
    console.log('values: ', values);
    const {history, UpdatePostAction, CreatePostAction} = this.props;
    if (hasOwnProperty(values, 'id')) {
      await createSubmitHandler(UpdatePostAction)({
        body: values,
        urlParams: {
          id: values.id,
        }
      })
    } else {
      await createSubmitHandler(CreatePostAction)({body: values})
    }
    history.push('/posts');
  };


  render() {
    const {error, handleSubmit, categories, values, reset, pristine, intl, submitting} = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <Row>
          <Col xs="12">
            <Card>
              <CardHeader>
                <strong>
                  <FormattedMessage
                    id={values && values.id ? "blog.post.editor.title" : "blog.post.create.title"}
                  />
                </strong>
              </CardHeader>
              <CardBlock className="card-body">
                <Row>
                  <Col xs="12">
                    <Field
                      name="title"
                      component={TextField}
                      placeholder={intl && intl.messages["form.label.title"]}
                      label={<FormattedMessage
                        id="form.label.title"
                        defaultMessage="form.label.title"
                      />}
                      validate={[required]}
                      type="text"
                    />
                  </Col>
                  <Col xs="12">
                    <Field
                      name="excerpt"
                      component={TextField}
                      placeholder={intl && intl.messages["form.label.introductory"]}
                      label={<FormattedMessage
                        id="form.label.introductory"
                        defaultMessage="form.label.description"
                      />}
                      type="textarea"
                    />
                  </Col>
                  <Col xs="12">
                    <Field
                      /** если есть id в состоянии формы значит мы редактируем статью, в таком случае автогенерация отключается */
                      isAutoGenTransliteration={!(values && values.id)}
                      name="alias_url"
                      component={URLAliasField}
                      placeholder={intl && intl.messages["form.label.urlAlias"]}
                      label={<FormattedMessage
                        id="form.label.urlAlias"
                        defaultMessage="form.label.urlAlias"
                      />}
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
                      placeholder={intl && intl.messages["form.label.category"]}
                      label={<FormattedMessage
                        id="form.label.category"
                        defaultMessage="form.label.category"
                      />}
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
                      placeholder={intl && intl.messages["form.label.publishStatus"]}
                      label={<FormattedMessage
                        id="form.label.publishStatus"
                        defaultMessage="form.label.publishStatus"
                      />}
                      type="select"
                      defaultValue={'DRAFT'}
                      validate={[required]}
                      data={[
                        {
                          id: "PUBLISHED",
                          name: intl && intl.messages[`publishStatus.PUBLISHED`]
                        }, {
                          id: "DRAFT",
                          name: intl && intl.messages[`publishStatus.DRAFT`]
                        }, {
                          id: "PENDING",
                          name: intl && intl.messages[`publishStatus.PENDING`]
                        }
                      ]}
                    />
                  </Col>
                  <Col xs="12" md="6">
                    <Field
                      name="public_at"
                      component={FormDateTimePicker}
                      placeholder={intl && intl.messages["form.label.publishStatus"]}
                      label={<FormattedMessage
                        id="form.label.publishStatus"
                        defaultMessage="form.label.publishTime"
                      />}
                    />
                  </Col>
                  <Col xs="12">
                    <Field
                      name="body"
                      component={FormCKEditor}
                      placeholder={intl && intl.messages["form.label.content"]}
                      label={<FormattedMessage
                        id="form.label.content"
                        defaultMessage="form.label.content"
                      />}
                      validate={[required]}
                      type="text"
                      ref="CKEDITOR"
                    />
                  </Col>
                  <Col xs="12">
                    <Field
                      name="tags"
                      component={FormTagInput}
                      placeholder={intl && intl.messages["form.placeholder.tags"]}
                      label={<FormattedMessage
                        id="form.label.tags"
                        defaultMessage="form.label.tags"
                      />}
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
              </CardBlock>
              <CardFooter>
                <Button
                  color="primary"
                  type="submit"
                  className="px-4"
                  disabled={pristine || submitting}
                >
                  <FormattedMessage
                    id="button.save"
                    defaultMessage="button.save"
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
              </CardFooter>
            </Card>
          </Col>
        </Row>

      </form>
    )
  }
}

const validate = (values, {intl}) => {

  console.log('validate: ', values, intl);
  const errors = {};

  if (!values.status) {
    errors.status = intl.messages ? intl.messages['validation.required'] : "Обязательно для заполнения";
  }

  if (!values.body) {
    errors.body = intl.messages ? intl.messages['validation.required'] : "Обязательно для заполнения";
  }

  if (!values.category_id) {
    errors.category_id = intl.messages ? intl.messages['validation.required'] : "Обязательно для заполнения";
  }
  if (!values.title) {
    errors.title = intl.messages ? intl.messages['validation.required'] : "Обязательно для заполнения";
  }

  if (values.alias_url) {
    let res = URIValidation('validation.URIValidation')(values.alias_url);
    errors.alias_url = res && intl.messages ? intl.messages[res] : res;
  }

  return errors
};

PostEditForm = connect(state => ({
  values: getFormValues('PostEditForm')(state),
}))(PostEditForm);

PostEditForm = reduxForm({
  form: 'PostEditForm',
  validate,
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
PostEditForm = injectIntl(PostEditForm);

export default PostEditForm;
