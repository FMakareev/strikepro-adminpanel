import React from 'react';
import {shallow} from 'enzyme/build';
import BlogCategoryList from './index';


it('mounts without crashing BlogCategoryList', () => {
  const wrapper = shallow(<BlogCategoryList />);
  wrapper.unmount()
});
