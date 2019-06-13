import React, {Component} from 'react';
import PostEditForm from "./PostEditForm";
import {connect as connectRestEasy} from "@brigad/redux-rest-easy";
import {
  GetPostAction,
  GetPostById,
  isRetrievingGetPost
} from "../../../../store/reduxRestEasy/Blog/BlogPostResource";
import {
  GetCategories,
  GetCategoriesAction,
  isRetrievingCategories
} from "../../../../store/reduxRestEasy/Blog/BlogCategoryResource";

export class PostEditor extends Component {

  constructor(props) {
    super(props);
    this.state = this.initialState;
  }

  get initialState() {
    return {}
  }

  componentWillMount() {
    const {match: {params}} = this.props;
    if (params && params.id) {
      this.props.GetPostAction(params.id);
    }
    this.props.GetCategoriesAction({
      query: {
        without_pagination: 1,
      }
    });
  }

  render() {
    const {
      categories,
      post,
      match: {params},
      isRetrievingGetPost,
      isRetrievingCategories
    } = this.props;
    if ((isRetrievingGetPost || isRetrievingCategories) && !categories) {
      return <div>Loading...</div>
    }
    if (!categories.length) {
      return null;
    }
    let initialValues = {
      initialValues: post(params && params.id)
    };
    return (
      <div className="animated fadeIn">
        <PostEditForm
          categories={Object.values(categories[0])}
          {...initialValues}
        />
      </div>
    )
  }
}


PostEditor = connectRestEasy(
  (state, ownProps) => ({
    post: (id) => {
      if(id){
        const data = GetPostById(state, 'posts', id, ownProps);
        if(data){
          return data[id];
        }
      }
      return null;
    },
    categories: GetCategories(state, ownProps),
    isRetrievingGetPost: isRetrievingGetPost(state, ownProps),
    isRetrievingCategories: isRetrievingCategories(state, ownProps),
  }),
  dispatch => ({
    GetPostAction: id => dispatch(GetPostAction({
      urlParams: {
        id
      }
    })),
    GetCategoriesAction: (options) => dispatch(GetCategoriesAction(options)),
  })
)(PostEditor);


export default PostEditor;
