import React from 'react';
import shallowequal from "shallowequal";


export class SliderPreviewVideo extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    return !shallowequal(nextProps.video, this.props.video)
  }

  componentDidUpdate() {
    try {
      const video = document.getElementById('backgroundVideo');
      if (video) {
        video.load();
        video.play();
      }
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const {video} = this.props;

    return (<video width={'100%'} id="backgroundVideo" loop="true" muted="true" autoPlay="true">
      {
        video && Object.values(video)
          .map(item => (<source src={item.src} type={item.type}/>))
      }
      Video not supported.
    </video>)
  }
}

export default SliderPreviewVideo;
