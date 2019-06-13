import React from "react";
import SlidePreviewContent from "../SlidePreviewContent/SlidePreviewContent";
import {SlidePropTypes} from "../../../PropTypes";
import SliderPreviewImage from "../SlidePreviewImage/SlidePreviewImage";


export const SlideBodyImage = (props)=>(<div className={'slides_item'}>
  <SliderPreviewImage image={props.image}/>
  <SlidePreviewContent {...props}/>
</div>);


SlideBodyImage.propTypes = SlidePropTypes;

export default SlideBodyImage;
