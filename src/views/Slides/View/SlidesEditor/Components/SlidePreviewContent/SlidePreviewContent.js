import React from 'react';
import ReactHtmlParser from "react-html-parser";
import classNames from "classnames";
import {SlidePropTypes} from "../../../PropTypes";

export const contentPosition = {
  'top-left': 'top-left slides_item-caption--top-left',
  'top-middle': 'top-middle slides_item-caption--top-middle',
  'top-right': 'top-right slides_item-caption--top-right',

  'middle-left': 'middle-left slides_item-caption--middle-left',
  'middle-middle': 'middle-middle slides_item-caption--middle-middle',
  'middle-right': 'middle-right slides_item-caption--middle-right',

  'bottom-left': 'bottom-left slides_item-caption--bottom-left',
  'bottom-middle': 'bottom-middle slides_item-caption--bottom-middle',
  'bottom-right': 'bottom-right slides_item-caption--bottom-right',
};

export const getContentPosition = (position) => {
  for (let prop in contentPosition) {
    if (prop === position) {
      return contentPosition[prop];
    }
  }
  return contentPosition['middle-middle'];
};

const slidesItemCaptionClassName = (backDrop = false, position = 'middle-center') => classNames({
  'slides_item-caption': true,
  'slides_item-caption--back-drop': backDrop,
  [getContentPosition(position)]: true
});

export const SlidePreviewContent = ({backDrop, position, body, buttonLabel, buttonLink}) => (<div
  className={slidesItemCaptionClassName(backDrop, position)}
>
  {
    body &&
    <div className="slides_item-caption-content">
      {ReactHtmlParser(body)}
    </div>
  }
  {
    buttonLabel &&
    <a href={buttonLink} className="button-base">
      {buttonLabel}
    </a>
  }
</div>);

SlidePreviewContent.propTypes = SlidePropTypes;

export default SlidePreviewContent;
