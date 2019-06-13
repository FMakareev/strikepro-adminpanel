import React from 'react';
import {shallow} from 'enzyme/build';
import TypeOfNomenclatureList from '.';


it('mounts without crashing TypeOfNomenclatureList', () => {
  const wrapper = shallow(<TypeOfNomenclatureList/>);
  wrapper.unmount()
});
