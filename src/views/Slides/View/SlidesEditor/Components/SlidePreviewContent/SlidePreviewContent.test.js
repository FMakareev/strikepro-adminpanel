import React from 'react';
import {shallow} from 'enzyme/build';
import SlidePreviewContent from './SlidePreviewContent';


it('Mounts without crashing SlidePreviewContent', () => {
  const wrapper = shallow(<SlidePreviewContent />);
  wrapper.unmount()
});
