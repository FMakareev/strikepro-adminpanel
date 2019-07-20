import React, {Component} from 'react';
import {
  Col,
  Row
} from "reactstrap";

import {connect as connectRestEasy} from "@brigad/redux-rest-easy";
import {
  DeletePostAction,
  GetPostsAction,
  GetPosts,
  isRetrievingGetPosts
} from "../../../../store/reduxRestEasy/Blog/BlogPostResource";
import BlogItem from "../../../../components/BlogItem/BlogItem";
import ItemListTemplate from "../../../../components/ItemListTemplate/ItemListTemplate";
import { FormattedMessage } from 'react-intl';


class PostList extends Component {

  render() {

    return (
      <ItemListTemplate
        header={<FormattedMessage
          id="blog.post.list.title"
          defaultMessage="List of posts"
        />}
        DeleteAction={DeletePostAction}
        GetAction={GetPostsAction}
        GetList={GetPosts}
        isRetrieving={isRetrievingGetPosts}
        ListComponent={({data, onDelete}) => {
          return (<Row>
            {
              data && data.map((item, index) => {
                return (
                  <Col xs="12" sm="6" md="4" key={index}>
                    <BlogItem
                      {...item}
                      onDelete={onDelete}
                    />
                  </Col>
                )
              })
            }
          </Row>)
        }}
      />
    )
  }
}


PostList = connectRestEasy(
  (state, ownProps) => ({
    posts: GetPosts(state, ownProps),
    isRetrievingGetPosts: isRetrievingGetPosts(state, ownProps),
  }),
  dispatch => ({
    DeletePostAction: id => dispatch(DeletePostAction(id)),
    GetPostsAction: id => dispatch(GetPostsAction(id)),
  })
)(PostList);

export default PostList;
