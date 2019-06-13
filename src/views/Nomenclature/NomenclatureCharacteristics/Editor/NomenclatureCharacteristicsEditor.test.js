import React from 'react';
import {shallow} from 'enzyme/build';
import NomenclatureCharacteristicsEditor from './index';


it('mounts without crashing NomenclatureCharacteristicsEditor', () => {
  const wrapper = shallow(<NomenclatureCharacteristicsEditor />);
  wrapper.unmount()
});
