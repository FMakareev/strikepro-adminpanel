import React, {Component} from 'react';

import {PageContainer} from "../../../../../components/PageContainer/PageContainer";
import {connect as connectRestEasy} from "@brigad/redux-rest-easy";

import {
  DeleteNomenclatureAction,
  GetNomenclatures,
  GetNomenclaturesAction,
  isRetrievingGetNomenclatures
} from "../../../../../store/reduxRestEasy/Nomenclature/NomenclatureResource";
import RestPagination from "../../../../Blog/View/Posts";
import Preloader from "../../../../../components/Preloader/Preloader";


export class NomenclatureList extends Component {

  componentWillMount() {
    this.onGetNomenclaturesAction();
  }

  onGetNomenclaturesAction = (id = 1) => {
    return this.props.GetNomenclaturesAction({
      query: {page: id}
    })
  };

  onDeleteNomenclatureAction = (id) => {
    return this.props.DeleteNomenclatureAction({
      urlParams: {
        id: id,
      }
    });
  };

  render() {

    const {nomenclatures, isRetrievingGetNomenclatures} = this.props;
    if (isRetrievingGetNomenclatures && !nomenclatures) {
      return (<Preloader/>)
    }
    if (!nomenclatures.length) {
      return null;
    }
    console.log(this.props);
    const data = Object.values(nomenclatures[0]);
    const metaData = nomenclatures[1];

    return (<PageContainer header={'title'}>



      <RestPagination
        metaData={metaData}
        onMovePage={this.onDeleteNomenclatureAction}
      />
    </PageContainer>)
  }
}

NomenclatureList = connectRestEasy(
  (state, ownProps) => ({
    nomenclatures: GetNomenclatures(state, ownProps),
    isRetrievingGetNomenclatures: isRetrievingGetNomenclatures(state, ownProps),
  }),
  dispatch => ({
    GetNomenclaturesAction: (options) => dispatch(GetNomenclaturesAction(options)),
    DeleteNomenclatureAction: (options) => dispatch(DeleteNomenclatureAction(options)),
  })
)(NomenclatureList);

export default NomenclatureList;
