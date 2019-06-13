import React from 'react';
import {shallow} from 'enzyme/build';
import BlogPostEditor from '.';


it('mounts without crashing BlogPostEditor', () => {
  const wrapper = shallow(<BlogPostEditor />);
  wrapper.unmount()
});
