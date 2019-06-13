import React from 'react';
import {shallow} from 'enzyme/build';
import BlogCategoryEditor from '.';


it('mounts without crashing BlogCategoryEditor', () => {
  const wrapper = shallow(<BlogCategoryEditor />);
  wrapper.unmount()
});
