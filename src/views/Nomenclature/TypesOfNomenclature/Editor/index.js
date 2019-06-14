import React, {Component} from 'react';
import {PageContainer} from "../../../../components/PageContainer/PageContainer";
import TypeOfNomenclatureEditorForm from "./Components/TypeOfNomenclatureEditorForm/TypeOfNomenclatureEditorForm";


export class TypeOfNomenclatureEditor extends Component {
  render() {
    return (<PageContainer header={'Типы номенклатурыы'}>
      <TypeOfNomenclatureEditorForm/>
    </PageContainer>)
  }
}

export default TypeOfNomenclatureEditor;
