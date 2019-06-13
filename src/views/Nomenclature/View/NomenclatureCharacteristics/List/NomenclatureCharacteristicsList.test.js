import React from 'react';
import {shallow} from 'enzyme/build';
import NomenclatureCharacteristicsList from '.';


it('mounts without crashing NomenclatureCharacteristicsList', () => {
  const wrapper = shallow(<NomenclatureCharacteristicsList/>);
  wrapper.unmount()
});
