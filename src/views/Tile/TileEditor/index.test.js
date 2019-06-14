import React from 'react';
import {shallow} from 'enzyme/build';
import TileEditor from './index';


it('mounts without crashing TileEditor', () => {
  const wrapper = shallow(<TileEditor />);
  wrapper.unmount()
});
