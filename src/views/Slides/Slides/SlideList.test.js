import React from 'react';
import {shallow} from 'enzyme/build';
import SlideList from './index';


it('mounts without crashing SlideList', () => {
  const wrapper = shallow(<SlideList />);
  wrapper.unmount()
});
