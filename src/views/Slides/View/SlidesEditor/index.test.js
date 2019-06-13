import React from 'react';
import {shallow} from 'enzyme/build';
import SlideEditor from '.';


it('mounts without crashing SlideEditor', () => {
  const wrapper = shallow(<SlideEditor />);
  wrapper.unmount()
});
