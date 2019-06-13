import React from 'react';
import {shallow} from 'enzyme/build';
import SlidePreview from './SlidePreview';


it('Mounts without crashing SlidePreview', () => {
  const wrapper = shallow(<SlidePreview />);
  wrapper.unmount()
});
