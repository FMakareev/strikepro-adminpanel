import React, {Component} from 'react';
import {PageContainer} from "../../../../../components/PageContainer/PageContainer";


export class TypeOfNomenclatureList extends Component {
  render(){
    const {title} = this.props;
    return (<PageContainer header={title}>
    </PageContainer>)
  }
}

export default TypeOfNomenclatureList;
