import React from "react";
import {SlidePropTypes} from "../../../PropTypes";
import SliderPreviewVideo from "../SlidePreviewVideo/SlidePreviewVideo";
import SlidePreviewContent from "../SlidePreviewContent/SlidePreviewContent";


export const SlideBodyVideo = (props)=>(<div className={'slides_item'}>
  <SliderPreviewVideo video={props.image}/>
  <SlidePreviewContent {...props}/>
</div>);


SlideBodyVideo.propTypes = SlidePropTypes;

export default SlideBodyVideo;
