import React, {Component} from 'react';
import {
  Table,
  Col,
  Row,
} from "reactstrap";
import {connect as connectRestEasy} from "@brigad/redux-rest-easy";

import {
  DeleteTileAction,
  GetTiles,
  GetTilesAction,
  isRetrievingGetTiles
} from "../../../store/reduxRestEasy/Tiles/TilesResource";
import RestPagination from "../../../components/RestPagination/RestPagination";
import TileItem from "../../../components/TileItem/TileItem";

export class TileList extends Component {

  componentWillMount() {
    const {location} = this.props;
    const result = location.search.match(/[0-9]/g);
    if(result && result.length){
      this.onGetTiles(result[0]);
    } else {
      this.onGetTiles();
    }
  }

  onGetTiles = (id = 1) => {
    return this.props.GetTilesAction({
      query: {page: id}
    })
  };

  onDeleteTile = (id) => {
    return this.props.DeleteTileAction({
      urlParams: {
        id: id,
      }
    });
  };

  render() {

    const {tiles, isRetrievingGetTiles} = this.props;
    if (isRetrievingGetTiles && !tiles) {
      return (<div>Loading...</div>);
    }
    if (!tiles.length) {
      return null;
    }
    const data = Object.values(tiles[0]);
    const metaData = tiles[1];

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12">
            <Table hover bordered striped responsive size="sm">
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
                      onDelete={this.onDeleteTile}
                    />
                  )
                })
              }
              </tbody>
            </Table>
          </Col>

          <RestPagination
            metaData={metaData}
            onMovePage={this.onGetTiles}
          />

        </Row>
      </div>
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
