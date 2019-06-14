import React, {Component} from 'react';
import {connect as connectRestEasy} from "@brigad/redux-rest-easy";
import shallowequal from "shallowequal";
import '../../slides.css';
import FormSlidesEditor from "./Components/FormSlidesEditor/FormSlidesEditor";
import {
  GetSlideAction, GetSlideById,
  isRetrievingGetSlide
} from "../../../../store/reduxRestEasy/Slides/SlidesResource";
import {SlideParseBody} from "./Components/SlideParseBody/SlideParseBody";
import {BG_SLIDER_TYPE_IMAGE} from "../../../../shared/constants";
import PageContainer from "../../../../components/PageContainer/PageContainer";


export class SlideEditor extends Component {

  constructor(props) {
    super(props);
  }


  shouldComponentUpdate(nextProps, nextState) {
    return !shallowequal(nextProps, this.props);
  }

  componentWillMount() {
    const {match} = this.props;
    if (match && match.params && match.params.id) {
      this.props.GetSlideAction({
        urlParams: {
          id: match.params.id,
        }
      });
    }
  }

  createInitialValues = () => {
    const {GetSlideById, match} = this.props;
    const slide = match && match.params && match.params.id && GetSlideById(match.params.id);
    let initialValues = {
      backgroundType: BG_SLIDER_TYPE_IMAGE,
      position: 'middle-middle',
      backDrop: false,
      buttonLabel: null,
      buttonLink: null,
      body: "",
      image: "",
    };
    if (slide) {
      initialValues = {
        ...slide,
        ...SlideParseBody(slide.body),
      };
    }
    return initialValues;
  };

  render() {
    const {isRetrievingGetSlide} = this.props;
    if (isRetrievingGetSlide) {
      return <div>Loading....</div>
    }

    return (
      <PageContainer
        header={'Создать слайд'}
      >
        <FormSlidesEditor
          initialValues={this.createInitialValues()}
        />
      </PageContainer>)
  }
}

SlideEditor = connectRestEasy(
  (state, ownProps) => ({
    GetSlideById: (id) => {
      const data = GetSlideById(state, 'slides', id, ownProps);
      if (data) {
        return data[id];
      }
      return null;
    },
    isRetrievingGetSlide: isRetrievingGetSlide(state, ownProps),
  }),
  dispatch => ({
    GetSlideAction: (options) => dispatch(GetSlideAction(options)),
  })
)(SlideEditor);

export default SlideEditor;
