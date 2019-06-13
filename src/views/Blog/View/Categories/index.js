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


export class CategoryList extends Component {

  render() {

    return (
      <ItemListTemplate
        header={'Список категорий в блога'}
        GetList={GetCategories}
        isRetrieving={isRetrievingCategories}
        GetAction={GetCategoriesAction}
        DeleteAction={DeleteCategoryAction}
        ListComponent={({onDelete, data}) => {
          return (<Table hover bordered striped responsive size="sm">
            <thead>
            <tr>
              <th>id</th>
              <th>Имя</th>
              <th>Дата создания</th>
              <th>Дата обновления</th>
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
