import React, {Component} from 'react';
import CategoryEditForm from "./CategoryEditForm";
import {connect as connectRestEasy} from "@brigad/redux-rest-easy";
import {
  GetCategories,
  GetCategoryAction,
  GetCategoryById,
  isRetrievingGetCategory,
} from "../../../../store/reduxRestEasy/Blog/BlogCategoryResource";


export class CategoryEditor extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const {match: {params}} = this.props;
    if (params && params.id) {
      this.props.GetCategoryAction({
        urlParams: {
          id: params.id,
        }
      });
    }
  }

  render() {
    const {category, match: {params}, isRetrievingGetCategory} = this.props;
    console.log(this.props);
    if (isRetrievingGetCategory) {
      return <div>Loading....</div>
    }

    let initialValues = {
      initialValues: params && params.id && category(params.id)
    };
    return (
      <div className="animated fadeIn">
        <CategoryEditForm {...initialValues}/>
      </div>
    )
  }
}

CategoryEditor = connectRestEasy(
  (state, ownProps) => ({
    category: (id) => {
      const data = GetCategoryById(state, 'categories', id);
      if (data) {
        return data[id];
      }
      return null;
    },
    isRetrievingGetCategory: isRetrievingGetCategory(state, ownProps),
  }),
  dispatch => ({
    GetCategoryAction: (options) => dispatch(GetCategoryAction(options)),
  })
)(CategoryEditor);

export default CategoryEditor;
