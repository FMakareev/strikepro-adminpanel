import React, {Component} from 'react';
import {Link} from "react-router-dom";

import {Button, Table} from "reactstrap";
import ItemListTemplate from "../../../../components/ItemListTemplate/ItemListTemplate";
import {
  DeleteUrlAliasAction,
  GetUrlAliases,
  GetUrlAliasesAction,
  isRetrievingGetUrlAliases,
} from "../../../../store/reduxRestEasy/UrlAlias/UrlAliasResource";

export class URLAliasList extends Component {
  render() {
    return (<ItemListTemplate
      header={'Список URL псевдонимов'}
      DeleteAction={DeleteUrlAliasAction}
      GetAction={GetUrlAliasesAction}
      GetList={GetUrlAliases}
      isRetrieving={isRetrievingGetUrlAliases}
      ListComponent={({onDelete, data}) => {
        return (<Table hover bordered striped responsive size="sm">
          <thead>
          <tr>
            <th>id</th>
            <th>url</th>
            <th>alias_url</th>
            <th>created_at</th>
            <th>updated_at</th>
          </tr>
          </thead>
          <tbody>
          {
            data && data.map((item, index) => {
              return (
                <tr key={`${index}`}>
                  <td>{item.id}</td>
                  <td>{item.url}</td>
                  <td>{item.alias_url}</td>
                  <td>{item.created_at}</td>
                  <td>{item.updated_at}</td>
                  <td>
                    <Button color="warning">
                      <Link
                        to={`/url-alias-editor/${item.id}`}
                      >
                        Изменить
                      </Link>
                    </Button>
                    {' '}
                    <Button
                      color="danger"
                      onClick={() => {
                        onDelete && onDelete(item.id)
                      }}
                      size="sm"
                    >
                      Удалить
                    </Button>
                  </td>
                </tr>
              )
            })
          }
          </tbody>
        </Table>)
      }}
    />)
  }
}

export default URLAliasList;
