import React from 'react';
import {shallow} from 'enzyme/build';
import TileList from './index-old';


it('mounts without crashing TileList', () => {
  const wrapper = shallow(<TileList />);
  wrapper.unmount()
});
