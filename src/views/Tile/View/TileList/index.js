import React, {Component} from 'react';
import {
  Table,
} from "reactstrap";

import {
  DeleteTileAction,
  GetTiles,
  GetTilesAction,
  isRetrievingGetTiles
} from "../../../../store/reduxRestEasy/Tiles/TilesResource";
import TileItem from "../../../../components/TileItem/TileItem";
import ItemListTemplate from "../../../../components/ItemListTemplate/ItemListTemplate";
import {FormattedMessage} from "react-intl";


export class TileList extends Component {


  render() {


    return (
      <ItemListTemplate
        header={<FormattedMessage
          id='tile.list.title'
          defaultMessage='tile.list.title'
        />}
        DeleteAction={DeleteTileAction}
        GetAction={GetTilesAction}
        GetList={GetTiles}
        isRetrieving={isRetrievingGetTiles}
        ListComponent={({onDelete, data}) => {
          return (<Table hover bordered striped responsive size="sm">
            <thead>
            <tr>
              <th>
                <FormattedMessage
                  id='tile.table.id'
                  defaultMessage='tile.table.id'
                />
              </th>
              <th>
                <FormattedMessage
                  id='tile.table.resource_id'
                  defaultMessage='tile.table.resource_id'
                />
              </th>
              <th>
                <FormattedMessage
                  id='tile.table.resource_type'
                  defaultMessage='tile.table.resource_type'
                />
              </th>
              <th>
                <FormattedMessage
                  id='tile.table.create_at'
                  defaultMessage='tile.table.create_at'
                />
              </th>
              <th>
                <FormattedMessage
                  id='tile.table.update_at'
                  defaultMessage='tile.table.update_at'
                />
              </th>
              <th>
                <FormattedMessage
                  id='tile.table.public_at'
                  defaultMessage='tile.table.public_at'
                />
              </th>
              <th>
                <FormattedMessage
                  id='tile.table.background_color'
                  defaultMessage='tile.table.background_color'
                />
              </th>
              <th>
                <FormattedMessage
                  id='tile.table.cols'
                  defaultMessage='tile.table.cols'
                />
              </th>
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


export default TileList;
