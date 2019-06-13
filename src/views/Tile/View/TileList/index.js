import React, {Component} from 'react';
import {
  Table,
} from "reactstrap";
import {connect as connectRestEasy} from "@brigad/redux-rest-easy";

import {
  DeleteTileAction,
  GetTiles,
  GetTilesAction,
  isRetrievingGetTiles
} from "../../../../store/reduxRestEasy/Tiles/TilesResource";
import TileItem from "../../../../components/TileItem/TileItem";
import ItemListTemplate from "../../../../components/ItemListTemplate/ItemListTemplate";


export class TileList extends Component {


  render() {


    return (
      <ItemListTemplate
        header={'Список плиток на главной'}
        DeleteAction={DeleteTileAction}
        GetAction={GetTilesAction}
        GetList={GetTiles}
        isRetrieving={isRetrievingGetTiles}
        ListComponent={({onDelete, data}) => {
          return (<Table hover bordered striped responsive size="sm">
            <thead>
            <tr>
              <th>id</th>
              <th>resource_id</th>
              <th>resource_type</th>
              <th>created_at</th>
              <th>updated_at</th>
              <th>public_at</th>
              <th>background_color</th>
              <th>cols</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            {
              data && data.map((item, index) => {
                return (
                  <TileItem
                    key={index}
                    {...item}
                    onDelete={onDelete}
                  />
                )
              })
            }
            </tbody>
          </Table>)
        }}
      />
    )
  }
}

TileList = connectRestEasy(
  (state, ownProps) => ({
    tiles: GetTiles(state, ownProps),
    isRetrievingGetTiles: isRetrievingGetTiles(state, ownProps),
  }),
  dispatch => ({
    GetTilesAction: (options) => dispatch(GetTilesAction(options)),
    DeleteTileAction: (options) => dispatch(DeleteTileAction(options)),
  })
)(TileList);

export default TileList;
