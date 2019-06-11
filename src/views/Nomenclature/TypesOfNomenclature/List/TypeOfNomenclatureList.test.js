import React from 'react';
import {shallow} from 'enzyme/build';
import TypeOfNomenclatureList from './index';


it('mounts without crashing TypeOfNomenclatureList', () => {
  const wrapper = shallow(<TypeOfNomenclatureList/>);
  wrapper.unmount()
});
