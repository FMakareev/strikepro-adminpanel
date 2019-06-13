import React, {Component} from 'react';
import {PageContainer} from "../../../../../components/PageContainer/PageContainer";
import FormNomenclatureCharacteristicsEditor from "./Components/FormNomenclatureCharacteristicsEditor";


export class NomenclatureCharacteristicsEditor extends Component {
  render(){
    return (<PageContainer header={'Характеристика номенклатуры'}>
      <FormNomenclatureCharacteristicsEditor/>
    </PageContainer>)
  }
}

export default NomenclatureCharacteristicsEditor;
