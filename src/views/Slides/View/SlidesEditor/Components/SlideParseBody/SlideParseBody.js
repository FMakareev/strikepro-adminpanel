import {contentPosition} from "../SlidePreviewContent/SlidePreviewContent";
import {BG_SLIDER_TYPE_IMAGE, BG_SLIDER_TYPE_VIDEO} from "../../../../../../shared/constants";

const trim = function (string) {
  return string ? string.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '') : string;
}

/**
 * @param {object} domBody - dom object
 * @return {'video'|'image'}
 * @desc check type background slide
 * */
const GetBGTypeSlideBody = (domBody) => {
  let result = domBody.getElementsByTagName('video');
  return result.length ? 'video' : 'image';
};


/**
 * @param {string} body
 * @return {boolean}
 * @desc check backdrop
 * */
const CheckBackDropSlideBody = (body) => body.indexOf('slides_item-caption--back-drop') !== -1;

/**
 * @return {object} [format]
 * @return {object} [format].src
 * @return {object} [format].type
 * */
const GetVideoFromSlideBody = (domBody) => {
  let video = domBody.getElementsByTagName('video');
  if (video && video.length) {
    const result = {};
    for (let i = 0; i < video[0].children.length; i += 1) {
      result[video[0].children[i].type] = {
        src: video[0].children[i].src,
        type: video[0].children[i].type,
      };
    }
    return result;
  }
  return ''
};
/**
 * @return {string}
 * */
const GetImageFromSlideBody = (domBody) => {
  let image = domBody.getElementsByClassName('slides_item-img');
  if (image.length) {
    return image[0].src;
  }
  return "";
};
/**
 * @return {string}
 * */
const GetContentSlideBody = (domBody) => {
  const content = domBody.getElementsByClassName('slides_item-caption-content');
  if (content && content.length) {
    return trim(content[0].innerHTML);
  }
  return '';
};

/** */
const GetButtonSlideBody = (domBody) => {
  const button = domBody.getElementsByClassName('button-base');
  if (button && button.length) {
    return {
      buttonLabel: trim(button[0].textContent),
      buttonLink: button[0].href,
    }
  }
  return {
    buttonLabel: null,
    buttonLink: null,
  }
};

/**
 * @return {string}
 * */
const GetPositionContentSlideBody = (body) => {
  for (let prop in contentPosition) {
    if (body.indexOf(prop) !== -1) {
      return prop
    }
  }
  return 'middle-middle';
};

/** */
export const SlideParseBody = (body) => {
  let result = {
    backgroundType: 'image', // GetBGTypeSlideBody
    position: 'top-middle', // GetPositionContentSlideBody
    backDrop: true, // CheckBackDropSlideBody
    buttonLabel: null, // GetPositionContentSlideBody
    buttonLink: null, // GetPositionContentSlideBody
    body: null, // GetContentSlideBody
    image: null, // GetImageFromSlideBody && GetVideoFromSlideBody
  };
  const domBody = new DOMParser().parseFromString(body, 'text/html').body;
  switch (GetBGTypeSlideBody(domBody)) {
    case(BG_SLIDER_TYPE_IMAGE): {
      result.backgroundType = BG_SLIDER_TYPE_IMAGE;
      result.image = GetImageFromSlideBody(domBody);
      break;
    }
    case(BG_SLIDER_TYPE_VIDEO): {
      result.backgroundType = BG_SLIDER_TYPE_VIDEO;
      result.image = GetVideoFromSlideBody(domBody);
      break;
    }
    default: {
      break;
    }
  }
  result.backDrop = CheckBackDropSlideBody(body);
  result.body = GetContentSlideBody(domBody);
  result.position = GetPositionContentSlideBody(body);
  result = {
    ...result,
    ...GetButtonSlideBody(domBody),
  };
  return result;
};
