import React, {Component} from 'react';
import {Card, CardBody, CardHeader} from "reactstrap";
import shallowequal from 'shallowequal';
import SliderPreviewVideo from "../SlidePreviewVideo/SlidePreviewVideo";
import SliderPreviewImage from "../SlidePreviewImage/SlidePreviewImage";
import SlidePreviewContent from "../SlidePreviewContent/SlidePreviewContent";
import {BG_SLIDER_TYPE_IMAGE, BG_SLIDER_TYPE_VIDEO} from "../../../../../../shared/constants";
import {FormattedMessage} from "react-intl";


export class SlidePreview extends Component {

  static defaultProps = {
    values:{
      backgroundType: BG_SLIDER_TYPE_IMAGE,
      image: '',
    }
  };
  // shouldComponentUpdate(nextProps, nextState) {
  //   return !shallowequal(nextProps.values, this.props.values)
  // }

  render() {
    const {
      backgroundType,
      image,
    } = this.props.values;
    return (<Card>
      <CardHeader>
        <strong>
          <FormattedMessage
            id='form.slides.label.preview'
            defaultMessage='form.slides.label.preview'
          />
        </strong>
      </CardHeader>
      <CardBody>
        {
          backgroundType === BG_SLIDER_TYPE_IMAGE && <div className={'slides_item'}>
            <SliderPreviewImage image={image}/>
            <SlidePreviewContent {...this.props.values}/>
          </div>
        }
        {
          backgroundType === BG_SLIDER_TYPE_VIDEO && <div className={'slides_item'}>
            <SliderPreviewVideo
              video={image}
            />
            <SlidePreviewContent {...this.props.values}/>
          </div>
        }
      </CardBody>
    </Card>)
  }
}

export default SlidePreview;
