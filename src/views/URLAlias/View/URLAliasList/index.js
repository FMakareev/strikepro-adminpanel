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
import DeleteButton from "../../../../components/DeleteButton/DeleteButton";
import {FormattedMessage} from "react-intl";

export class URLAliasList extends Component {
  render() {
    return (<ItemListTemplate
      header={<FormattedMessage
        id="urlAlias.list.title"
      />}
      DeleteAction={DeleteUrlAliasAction}
      GetAction={GetUrlAliasesAction}
      GetList={GetUrlAliases}
      isRetrieving={isRetrievingGetUrlAliases}
      ListComponent={({onDelete, data}) => {
        return (<Table hover bordered striped responsive size="sm">
          <thead>
          <tr>
            <th>
              <FormattedMessage
                id="tile.table.id"
              />
            </th>
            <th>
              <FormattedMessage
                id="urlAlias.table.url"
              />
            </th>
            <th>
              <FormattedMessage
                id="urlAlias.table.alias_url"
              />
            </th>
            <th>
              <FormattedMessage
                id="tile.table.create_at"
              />
            </th>
            <th>
              <FormattedMessage
                id="tile.table.update_at"
              />
            </th>
            <th></th>
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
                        to={`/url-alias/editor/${item.id}`}
                      >
                        <FormattedMessage
                          id="button.change"
                          defaultMessage="Change"
                        />
                      </Link>
                    </Button>
                    {' '}
                    <DeleteButton
                      label={<FormattedMessage
                        id="button.delete"
                        defaultMessage="Change"
                      />}
                      confirmMessage={<FormattedMessage
                        id="confirmMessage.delete"
                        defaultMessage="Are you sure you want to delete?"
                      />}
                      onDelete={() => onDelete(item.id)}
                    />
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
