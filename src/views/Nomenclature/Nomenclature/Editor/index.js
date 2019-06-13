import React, {Component} from 'react';
import {PageContainer} from "../../../../components/PageContainer/PageContainer";
import {connect as connectRestEasy} from "@brigad/redux-rest-easy";
import {
  GetNomenclatureAction,
  GetNomenclatureById,
  isRetrievingGetNomenclature,
} from "../../../../store/reduxRestEasy/Nomenclature/NomenclatureResource";
import {
  GetTypesOfNomenclatures,
  GetTypesOfNomenclaturesAction, isRetrievingGetTypesOfNomenclatures
} from "../../../../store/reduxRestEasy/TypesOfNomenclature/TypesOfNomenclatureResource";


export class NomenclatureEditor extends Component {

  componentWillMount() {
    const {match: {params}} = this.props;
    if (params && params.id) {
      this.props.GetNomenclatureAction(params.id);
    }
    this.props.GetTypesOfNomenclaturesAction({
      query: {
        without_pagination: 1,
      }
    });
  }

  render() {
    const {
      typesOfNomenclatures,
      nomenclature,
      match: {params},
      isRetrievingGetNomenclature,
      isRetrievingGetTypesOfNomenclatures,
    } = this.props;

    if (
      isRetrievingGetNomenclature &&
      !typesOfNomenclatures &&
      !isRetrievingGetTypesOfNomenclatures
    ) {
      return <div>Loading...</div>
    }

    if (!typesOfNomenclatures.length) {
      return null;
    }

    let initialValues = {
      initialValues: nomenclature(params && params.id)
    };


    return (<PageContainer header={'title'}>
    </PageContainer>)
  }
}

NomenclatureEditor = connectRestEasy(
  (state, ownProps) => ({
    nomenclature: (id) => {
      if (id) {
        const data = GetNomenclatureById(state, 'nomenclatures', id, ownProps);
        if (data) {
          return data[id];
        }
      }
      return null;
    },
    typesOfNomenclatures: GetTypesOfNomenclatures(state, ownProps),
    isRetrievingGetNomenclature: isRetrievingGetNomenclature(state, ownProps),
    isRetrievingGetTypesOfNomenclatures: isRetrievingGetTypesOfNomenclatures(state, ownProps),
  }),
  dispatch => ({
    GetNomenclatureAction: (options) => dispatch(GetNomenclatureAction(options)),
    GetTypesOfNomenclaturesAction: (options) => dispatch(GetTypesOfNomenclaturesAction(options)),
  })
)(NomenclatureEditor);


export default NomenclatureEditor;
