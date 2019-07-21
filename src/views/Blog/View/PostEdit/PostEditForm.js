import React, {Component} from 'react';
import {Alert, Button, Card, CardBlock, CardFooter, CardHeader, Col, FormGroup, Row} from "reactstrap";
import {Field, getFormValues, reduxForm} from "redux-form";
import PropTypes from 'prop-types';
import FormSelect from "../../../../components/Form/FormSelect";
import FormDateTimePicker from "../../../../components/FormDateTimePicker/FormDateTimePicker";
import FormCKEditor from "../../../../components/Form/form_ckeditor";
import FormTagInput from "../../../../components/Form/FormTagInput";
import {TextField} from "../../../../components/TextField/TextField";
import {connect as connectRestEasy} from "@brigad/redux-rest-easy";
import {
  CreatePostAction,
  isRetrievingCreatePost,
  isRetrievingGetPost,
  UpdatePostAction,
} from "../../../../store/reduxRestEasy/Blog/BlogPostResource";
import {withRouter} from "react-router-dom";
import MetaFields from "./Components/MetaFields/MetaFields";
import OGMetaFields from "./Components/OGMetaFields/OGMetaFields";
import {URLAliasField} from "../../../../components/URLAliaseField/URLAliaseField";
import {connect} from "react-redux";
import {URIValidation} from "../../../../validation/URIValidation";
import {CreateUrlAliasAction, UpdateUrlAliasAction} from "../../../../store/reduxRestEasy/UrlAlias/UrlAliasResource";
import {createSubmitHandler} from "../../../../helpers/createSubmitHandler";
import {hasOwnProperty} from "../../../../helpers/hasOwnProperty";
import {defineMessages, FormattedMessage, injectIntl} from "react-intl";
import {GetMessageFromIntl} from "../../../../helpers/GetMessageFromIntl";
import {maxLength} from "../../../../validation/maxLength";


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
    history.push('/blog/posts');
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
                      label={<FormattedMessage
                        id="form.label.title"
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
                      label={<FormattedMessage
                        id="form.label.urlAlias"
                      />}
                      type="text"
                      subscribeField={'title'}
                      formValues={values}
                    />
                  </Col>
                  <Col xs="12" md="6">
                    <Field
                      name="category_id"
                      component={FormSelect}
                      label={<FormattedMessage
                        id="form.label.category"
                      />}
                      type="select"
                      defaultValue={''}
                      data={categories}
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
                      defaultValue={'DRAFT'}
                      data={[
                        {
                          id: "PUBLISHED",
                          name: GetMessageFromIntl(intl, `publishStatus.PUBLISHED`)
                        }, {
                          id: "DRAFT",
                          name: GetMessageFromIntl(intl, `publishStatus.DRAFT`)
                        }, {
                          id: "PENDING",
                          name: GetMessageFromIntl(intl, `publishStatus.PENDING`)
                        }
                      ]}
                    />
                  </Col>
                  <Col xs="12" md="6">
                    <Field
                      name="public_at"
                      component={FormDateTimePicker}
                      label={<FormattedMessage
                        id="form.label.publishStatus"
                      />}
                    />
                  </Col>
                  <Col xs="12">
                    <Field
                      name="body"
                      component={FormCKEditor}
                      label={<FormattedMessage
                        id="form.label.body"
                      />}
                      type="text"
                      ref="CKEDITOR"
                    />
                  </Col>
                  <Col xs="12">
                    <Field
                      name="tags"
                      component={FormTagInput}
                      label={<FormattedMessage
                        id="form.label.tags"
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
                        <FormattedMessage
                          id={error}
                        />
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

  if (!values.status) {
    errors.status = GetMessageFromIntl(intl, 'validation.required');
  }

  if (!values.body) {
    errors.body = GetMessageFromIntl(intl, 'validation.required');
  }

  if (!values.category_id) {
    errors.category_id = GetMessageFromIntl(intl, 'validation.required');
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
