import React from 'react';
import {shallow} from 'enzyme/build';
import BlogPostList from './index';


it('mounts without crashing BlogPostList', () => {
  const wrapper = shallow(<BlogPostList />);
  wrapper.unmount()
});
