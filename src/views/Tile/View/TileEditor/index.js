import React, {Component} from 'react';
import {TileEditorForm} from "./Components/TileEditorForm/TileEditorForm";
import {connect as connectRestEasy} from "@brigad/redux-rest-easy";
import {
  GetTileAction,
  GetTileById,
  isRetrievingGetTile,
  TILES_RESOURCE_NAME
} from "../../../../store/reduxRestEasy/Tiles/TilesResource";
import {
  GetTileTypes,
  GetTileTypesAction,
  isRetrievingGetTileTypes
} from "../../../../store/reduxRestEasy/TileTypes/TileTypesResource";
import Preloader from "../../../../components/Preloader/Preloader";

export class TileEditor extends Component {

  componentWillMount() {
    const {match: {params}, GetTileAction, GetTileTypesAction} = this.props;
    if (params && params.id) {
      GetTileAction({
        urlParams: {
          id: params.id,
        }
      });
    }
    GetTileTypesAction();
  }


  render() {
    const {
      tile,
      tileTypes,
      match: {params},
      isRetrievingGetTile,
      isRetrievingGetTileTypes
    } = this.props;
    if (isRetrievingGetTile || isRetrievingGetTileTypes) {
      return (<Preloader/>)
    }
    if (!tileTypes.length) {
      return null;
    }
    let initialValues = {
      initialValues: params && params.id && tile(params.id)
    };
    const data = tileTypes && Object.values(tileTypes[0]);
    return (
      <div className="animated fadeIn">
        <TileEditorForm tileTypes={data} {...initialValues}/>
      </div>
    )
  }
}

TileEditor = connectRestEasy(
  (state, ownProps) => ({
    tileTypes: GetTileTypes(state, ownProps),
    tile: (id) => {
      const data = GetTileById(state, TILES_RESOURCE_NAME, id);
      console.log(data);
      if (data) {
        return data[id];
      }
      return null;
    },
    isRetrievingGetTileTypes: isRetrievingGetTileTypes(state, ownProps),
    isRetrievingGetTile: isRetrievingGetTile(state, ownProps),
  }),
  dispatch => ({
    GetTileAction: (options) => dispatch(GetTileAction(options)),
    GetTileTypesAction: (options) => dispatch(GetTileTypesAction(options)),
  })
)(TileEditor);

export default TileEditor;
