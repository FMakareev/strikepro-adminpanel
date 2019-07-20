import React, {Component} from 'react';
import {
  Table
} from "reactstrap";
import {
  DeleteCategoryAction,
  GetCategories,
  GetCategoriesAction,
  isRetrievingCategories
} from "../../../../store/reduxRestEasy/Blog/BlogCategoryResource";
import CategoryItem from "../../../../components/CategoryItem/CategoryItem";
import ItemListTemplate from "../../../../components/ItemListTemplate/ItemListTemplate";
import {FormattedMessage} from "react-intl";


export class CategoryList extends Component {

  render() {

    return (
      <ItemListTemplate
        header={<FormattedMessage
          id='blog.category.list.title'
        />}
        GetList={GetCategories}
        isRetrieving={isRetrievingCategories}
        GetAction={GetCategoriesAction}
        DeleteAction={DeleteCategoryAction}
        ListComponent={({onDelete, data}) => {
          return (<Table hover bordered striped responsive size="sm">
            <thead>
            <tr>
              <th>
                <FormattedMessage
                  id='tile.table.id'
                />
              </th>
              <th>
                <FormattedMessage
                  id='blog.category.table.name'
                />
                Имя
              </th>
              <th>
                <FormattedMessage
                  id='tile.table.create_at'
                />
              </th>
              <th>
                <FormattedMessage
                  id='tile.table.update_at'
                />
              </th>
              <th/>
            </tr>
            </thead>
            <tbody>
            {
              data && data.map((item, index) => (
                <CategoryItem
                  key={index}
                  {...item}
                  onDelete={onDelete}
                />
              ))
            }
            </tbody>
          </Table>)
        }}
      />
    )
  }
}


export default CategoryList;
