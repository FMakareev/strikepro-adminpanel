import React, {Component} from 'react';

import {Table} from "reactstrap";
import ItemListTemplate from "../../../../components/ItemListTemplate/ItemListTemplate";

import {
  DeleteFeedbackAction,
  GetFeedbackList,
  GetFeedbackListAction,
  isRetrievingGetFeedbackList
} from "../../../../store/reduxRestEasy/Feedback/FeedbackResource";
import {FormattedMessage} from "react-intl";

export class FeedbackList extends Component {

  /**
   * @param {0|1} status
   * */
  getStatusFeedback = (status) => {
    return status ? 'не обработано' : 'обработано';
  };

  render() {
    return (<ItemListTemplate
      header={<FormattedMessage
        id="feedback.list.title"
      />}
      DeleteAction={DeleteFeedbackAction}
      GetAction={GetFeedbackListAction}
      GetList={GetFeedbackList}
      isRetrieving={isRetrievingGetFeedbackList}
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
                id="feedback.table.username"
              />
            </th>
            <th>
              <FormattedMessage
                id="feedback.table.email"
              />
            </th>
            <th>
              <FormattedMessage
                id="feedback.table.phone"
              />
            </th>
            <th>
              <FormattedMessage
                id="feedback.table.message"
              />
            </th>
            <th>
              <FormattedMessage
                id="feedback.table.status"
              />
            </th>
            <th>
              <FormattedMessage
                id="tile.table.create_at"
              />
            </th>
            {/*<th></th>*/}
          </tr>
          </thead>
          <tbody>
          {
            data && data.map((item, index) => {
              return (
                <tr key={`${index}`}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.telephone}</td>
                  <td>{item.message}</td>
                  <td>{this.getStatusFeedback(item.status)}</td>
                  <td>{item.created_at}</td>
                  {/*<td>*/}
                  {/*<Button color="warning">*/}
                  {/*<Link*/}
                  {/*to={`/url-alias-editor/${item.id}`}*/}
                  {/*>*/}
                  {/*Изменить*/}
                  {/*</Link>*/}
                  {/*</Button>*/}
                  {/*{' '}*/}
                  {/*<DeleteButton onDelete={()=>onDelete(item.id)}/>*/}
                  {/*</td>*/}
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

export default FeedbackList;
