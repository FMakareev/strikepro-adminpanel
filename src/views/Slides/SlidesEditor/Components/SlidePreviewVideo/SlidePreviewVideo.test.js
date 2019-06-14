import React from 'react';
import {shallow} from 'enzyme/build';
import SlidePreviewVideo from './SlidePreviewVideo';


it('Mounts without crashing SlidePreviewVideo', () => {
  const wrapper = shallow(<SlidePreviewVideo />);
  wrapper.unmount()
});
