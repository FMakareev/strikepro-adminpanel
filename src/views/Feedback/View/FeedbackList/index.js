import React, {Component} from 'react';

import {Table} from "reactstrap";
import ItemListTemplate from "../../../../components/ItemListTemplate/ItemListTemplate";

import {
  DeleteFeedbackAction,
  GetFeedbackList,
  GetFeedbackListAction,
  isRetrievingGetFeedbackList
} from "../../../../store/reduxRestEasy/Feedback/FeedbackResource";

export class FeedbackList extends Component {

  /**
   * @param {0|1} status
   * */
  getStatusFeedback = (status) => {
    return status ? 'не обработано' : 'обработано';
  };

  render() {
    return (<ItemListTemplate
      header={'Список сообщений от пользователей'}
      DeleteAction={DeleteFeedbackAction}
      GetAction={GetFeedbackListAction}
      GetList={GetFeedbackList}
      isRetrieving={isRetrievingGetFeedbackList}
      ListComponent={({onDelete, data}) => {
        return (<Table hover bordered striped responsive size="sm">
          <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>telephone</th>
            <th>message</th>
            <th>status</th>
            <th>created_at</th>
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
