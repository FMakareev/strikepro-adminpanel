import React, {Component} from 'react';
import {Field, getFormValues, reduxForm} from "redux-form";
import {renderToString} from 'react-dom/server'
import {connect} from "react-redux";
import {connect as connectRestEasy} from "@brigad/redux-rest-easy";
import {withRouter} from "react-router-dom";
import {Alert, Button, Col, Row} from "reactstrap";

import FormCKEditor from "../../../../../../components/Form/form_ckeditor";
import FormSelect from "../../../../../../components/Form/FormSelect";
import Checkbox from "../../../../../../components/Checkbox/Checkbox";
import {TextField} from "../../../../../../components/TextField/TextField";
import {
  CreateSlideAction,
  isRetrievingCreateSlide, isRetrievingUpdateSlide,
  UpdateSlideAction
} from "../../../../../../store/reduxRestEasy/Slides/SlidesResource";
import {SlidePreview} from "../SlidePreview/SlidePreview";
import UploadVideo from "../UploadVideo/UploadVideo";
import UploadImage from "../UploadImage/UploadImage";
import {BG_SLIDER_TYPE_IMAGE, BG_SLIDER_TYPE_VIDEO} from "../../../../../../shared/constants";
import SlideBodyVideo from "../SlideBodyVideo/SlideBodyVideo";
import SlideBodyImage from "../SlideBodyImage/SlideBodyImage";
import {hasOwnProperty} from "../../../../../../helpers/hasOwnProperty";
import {createSubmitHandler} from "../../../../../../helpers/createSubmitHandler";
import FormDateTimePicker from "../../../../../../components/FormDateTimePicker/FormDateTimePicker";
import {FormattedMessage, injectIntl} from "react-intl";


export class FormSlidesEditor extends Component {

  getSlideBody = (values) => {
    try {
      if (values.backgroundType === BG_SLIDER_TYPE_IMAGE) {
        return renderToString(<SlideBodyImage {...values}/>);
      }
      if (values.backgroundType === BG_SLIDER_TYPE_VIDEO) {
        return renderToString(<SlideBodyVideo {...values}/>);
      }
    } catch (e) {
      console.log(e);
      return null;
    }
  };

  onSubmit = async (values) => {
    console.log('values: ', values);
    const body = this.getSlideBody(values);

    const {history, UpdateSlideAction, CreateSlideAction} = this.props;
    if (hasOwnProperty(values, 'id')) {
      await createSubmitHandler(UpdateSlideAction)({
        body: {
          ...values,
          body: body,
        },
        urlParams: {
          id: values.id,
        }
      })
    } else {
      await createSubmitHandler(CreateSlideAction)({
        body: {
          body: body,
        },
      })
    }
    history.push('/slides');
  };


  render() {
    const {handleSubmit, pristine, submitting, error, values, intl} = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <Row>
          <Col xs="6">
            {
              values && values.backgroundType === BG_SLIDER_TYPE_IMAGE &&
              <Field
                name={"image"}
                component={UploadImage}
                type={"file"}
              />
            }

            {
              values && values.backgroundType === BG_SLIDER_TYPE_VIDEO &&
              <Field
                name={"image"}
                component={UploadVideo}
                type={"file"}
              />
            }
          </Col>

          <Col xs="6">
          </Col>
          <Col xs="6">
            <Field
              name="backgroundType"
              component={FormSelect}
              label={<FormattedMessage
                id='form.slides.label.bgType'
                defaultMessage='form.slides.label.bgType'
              />}
              type="select"
              data={[
                {
                  name: intl && intl.messages["form.slides.bgType.image"],
                  id: BG_SLIDER_TYPE_IMAGE,
                },
                {
                  name: intl && intl.messages["form.slides.bgType.video"],
                  id: BG_SLIDER_TYPE_VIDEO,
                },
              ]}
            />
          </Col>
          <Col xs="6">
            <Field
              name="position"
              component={FormSelect}
              label={<FormattedMessage
                id='form.slides.label.contentPosition'
                defaultMessage='form.slides.label.contentPosition'
              />}
              type="select"
              data={[
                {
                  name: intl && intl.messages["form.slides.contentPosition.topLeft"],
                  id: 'top-left',
                },
                {
                  name: intl && intl.messages["form.slides.contentPosition.topMiddle"],
                  id: 'top-middle',
                },
                {
                  name: intl && intl.messages["form.slides.contentPosition.topRight"],
                  id: 'top-right',
                },

                {
                  name: intl && intl.messages["form.slides.contentPosition.middleLeft"],
                  id: 'middle-left',
                },
                {
                  name: intl && intl.messages["form.slides.contentPosition.middleMiddle"],
                  id: 'middle-center',
                },
                {
                  name: intl && intl.messages["form.slides.contentPosition.middleRight"],
                  id: 'middle-right',
                },
                {
                  name: intl && intl.messages["form.slides.contentPosition.bottomLeft"],
                  id: 'bottom-left',
                },
                {
                  name: intl && intl.messages["form.slides.contentPosition.bottomMiddle"],
                  id: 'bottom-center',
                },
                {
                  name: intl && intl.messages["form.slides.contentPosition.bottomRight"],
                  id: 'bottom-right',
                },
              ]}
            />
          </Col>
          <Col xs="7">
            <Field
              name="backDrop"
              component={Checkbox}
              label={<FormattedMessage
                id='form.slides.label.enableContentBG'
                defaultMessage='form.slides.label.enableContentBG'
              />}
              type="checkbox"
              value={true}
            />
          </Col>
          <Col xs="6">
            <Field
              name="buttonLabel"
              component={TextField}
              label={<FormattedMessage
                id='form.slides.label.buttonText'
                defaultMessage='form.slides.label.buttonText'
              />}
              type="text"
            />
          </Col>
          <Col xs="6">
            <Field
              name="buttonLink"
              component={TextField}
              label={<FormattedMessage
                id='form.slides.label.buttonLink'
                defaultMessage='form.slides.label.buttonLink'
              />}
              type="text"
            />
          </Col>
          <Col xs="6">
            <Field
              name="public_at"
              component={FormDateTimePicker}
              label={<FormattedMessage
                id='form.label.publishTime'
                defaultMessage='form.label.publishTime'
              />}
              type="text"
            />
          </Col>
          <Col xs={12}>
            <Field
              name={"body"}
              component={FormCKEditor}
              label={<FormattedMessage
                id='form.label.content'
                defaultMessage='form.label.content'
              />}
              type={"text"}
              ref={"CKEDITOR"}

              config={{
                toolbarGroups: [
                  {name: 'basicstyles', groups: ['basicstyles']},
                  '/',
                  {name: 'styles'},
                  {name: 'colors'},
                  {name: 'tools'},
                ]
              }}

            />
          </Col>
        </Row>

        <SlidePreview
          values={values}
        />

        {
          error && <Alert className={'pb-3'} color="danger">
            {error}
          </Alert>
        }

        <Row className={'pb-3'}>
          <Col xs="12" md="6" lg="4">
            <Button
              color="primary"
              type="submit"
              disabled={pristine || submitting}
            >
              <FormattedMessage
                id='button.save'
                defaultMessage='button.save'
              />
            </Button>
          </Col>
        </Row>
      </form>)
  }
}

FormSlidesEditor = connect(state => ({
  values: getFormValues('FormSlidesEditor')(state),
}))(FormSlidesEditor);

FormSlidesEditor = reduxForm({
  form: 'FormSlidesEditor'
})(FormSlidesEditor);

FormSlidesEditor = connectRestEasy(
  (state, ownProps) => ({
    isRetrievingCreateSlide: isRetrievingCreateSlide(state, ownProps),
    isRetrievingUpdateSlide: isRetrievingUpdateSlide(state, ownProps),
  }),
  dispatch => ({
    CreateSlideAction: (options) => dispatch(CreateSlideAction(options)),
    UpdateSlideAction: (options) => dispatch(UpdateSlideAction(options)),
  })
)(FormSlidesEditor);

FormSlidesEditor = withRouter(FormSlidesEditor);
FormSlidesEditor = injectIntl(FormSlidesEditor);

export default FormSlidesEditor;
