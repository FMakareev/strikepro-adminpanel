import React from 'react';
import {shallow} from 'enzyme/build';
import TypeOfNomenclatureEditor from '../..';


it('mounts without crashing TypeOfNomenclatureEditor', () => {
  const wrapper = shallow(<TypeOfNomenclatureEditor/>);
  wrapper.unmount()
});
