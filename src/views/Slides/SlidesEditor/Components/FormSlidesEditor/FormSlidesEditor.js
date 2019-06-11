import React, {Component} from 'react';
import {Field, getFormValues, reduxForm, SubmissionError} from "redux-form";
import { renderToString } from 'react-dom/server'
import {connect} from "react-redux";
import {connect as connectRestEasy} from "@brigad/redux-rest-easy";
import {withRouter} from "react-router-dom";
import {Alert, Button, Col, Row} from "reactstrap";

import FormCKEditor from "../../../../../components/Form/form_ckeditor";
import FormSelect from "../../../../../components/Form/FormSelect";
import Checkbox from "../../../../../components/Checkbox/Checkbox";
import {TextField} from "../../../../../components/TextField/TextField";
import {
  CreateSlideAction,
  isRetrievingCreateSlide, isRetrievingUpdateSlide,
  UpdateSlideAction
} from "../../../../../store/reduxRestEasy/Slides/SlidesResource";
import {normalizeSubmissionError} from "../../../../../helpers/normalizeSubmissionError";
import {SlidePreview} from "../SlidePreview/SlidePreview";
import UploadVideo from "../UploadVideo/UploadVideo";
import UploadImage from "../UploadImage/UploadImage";
import {BG_SLIDER_TYPE_IMAGE, BG_SLIDER_TYPE_VIDEO} from "../../../../../shared/constants";
import SlideBodyVideo from "../SlideBodyVideo/SlideBodyVideo";
import SlideBodyImage from "../SlideBodyImage/SlideBodyImage";


export class FormSlidesEditor extends Component {

  getSlideBody = (values) => {
    try {
      if(values.backgroundType === BG_SLIDER_TYPE_IMAGE){
        return renderToString(<SlideBodyImage {...values}/>);
      }
      if(values.backgroundType === BG_SLIDER_TYPE_VIDEO){
        return renderToString(<SlideBodyVideo {...values}/>);
      }
    } catch (e) {
      console.log(e);
      return null;
    }
  };

  onSubmit = (values) => {
    const {history} = this.props;
    const body = this.getSlideBody(values);
    console.log(body);
    if (values.hasOwnProperty('id')) {
      return this.props.UpdateSlideAction({
        body: {
          body: body,
        },
        urlParams: {
          id: values.id,
        }
      })
        .then(({normalizedPayload}) => {
          if (normalizedPayload && normalizedPayload.errors) {
            throw normalizedPayload;
          }
          history.push('/slides');
        })
        .catch(error => {
          throw new SubmissionError(normalizeSubmissionError(error));
        })
    } else {
      return this.props.CreateSlideAction({
        body: {
          body: body,
        },
      })
        .then(({normalizedPayload}) => {
          if (normalizedPayload && normalizedPayload.errors) {
            throw normalizedPayload;
          }
          history.push('/slides');
        })
        .catch(error => {
          throw new SubmissionError(normalizeSubmissionError(error));
        })
    }
  };

  render() {
    const {handleSubmit, pristine, submitting, error, values} = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
          <SlidePreview
            values={values}
          />
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
                label={"Тип фона"}
                type="select"
                data={[
                  {
                    name: 'Изображение',
                    id: BG_SLIDER_TYPE_IMAGE,
                  },
                  {
                    name: 'Видео',
                    id: BG_SLIDER_TYPE_VIDEO,
                  },
                ]}
              />
            </Col>
            <Col xs="6">
              <Field
                name="position"
                component={FormSelect}
                label={"Позиционирование контента"}
                type="select"
                data={[
                  {
                    name: 'Свурху слева',
                    id: 'top-left',
                  },
                  {
                    name: 'Сверху по центру',
                    id: 'top-middle',
                  },
                  {
                    name: 'Сверху справа',
                    id: 'top-right',
                  },

                  {
                    name: 'Посередине слева',
                    id: 'middle-left',
                  },
                  {
                    name: 'Посередине',
                    id: 'middle-center',
                  },
                  {
                    name: 'Посередине справа',
                    id: 'middle-right',
                  },
                  {
                    name: 'Снизу слева',
                    id: 'bottom-left',
                  },
                  {
                    name: 'Снизу по середине',
                    id: 'bottom-center',
                  },
                  {
                    name: 'Снизу справа',
                    id: 'bottom-right',
                  },
                ]}
              />
            </Col>
            <Col xs="7">
              <Field
                name="backDrop"
                component={Checkbox}
                label={"Включить фон для контента?"}
                type="checkbox"
                value={true}
              />
            </Col>
            <Col xs="6">
              <Field
                name="buttonLabel"
                component={TextField}
                label={"Текст кнопки"}
                type="text"
              />
            </Col>
            <Col xs="6">
              <Field
                name="buttonLink"
                component={TextField}
                label={"Ссылка кнопки"}
                type="text"
              />
            </Col>
            <Col xs={12}>
              <Field
                name={"body"}
                component={FormCKEditor}
                label={"Контент"}
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
                // disabled={pristine || submitting}
              >
                Сохранить
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

export default FormSlidesEditor;
