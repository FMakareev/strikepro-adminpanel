import React from 'react';
import {shallow} from 'enzyme/build';
import SlidePreviewImage from './SlidePreviewImage';


it('Mounts without crashing SlidePreviewImage', () => {
  const wrapper = shallow(<SlidePreviewImage />);
  wrapper.unmount()
});
