import React from 'react';
import {shallow} from 'enzyme/build';
import NomenclatureEditor from './index';


it('mounts without crashing NomenclatureEditor', () => {
  const wrapper = shallow(<NomenclatureEditor />);
  wrapper.unmount()
});
