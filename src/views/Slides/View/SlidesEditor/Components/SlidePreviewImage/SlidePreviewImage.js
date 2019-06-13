import React from 'react';


export const SliderPreviewImage = ({image}) => (<img
  src={image}
  alt=""
  className="slides_item-img"
  draggable="false"
/>);

export default SliderPreviewImage;
