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
} from "../../../store/reduxRestEasy/Blog/BlogPostResource";
import BlogItem from "../../../components/BlogItem/BlogItem";
import RestPagination from "../../../components/RestPagination/RestPagination";


class PostList extends Component {

  constructor(props) {
    super(props);
    this.onGetPosts = this.onGetPosts.bind(this);
  }

  componentWillMount() {
    const {location} = this.props;
    const result = location.search.match(/[0-9]/g);
    if(result && result.length){
      this.onGetPosts(result[0]);
    } else {
      this.onGetPosts();
    }
  }

  onDeletePost = (id) => {
    return this.props.DeletePostAction({
      urlParams: {
        id: id,
      }
    });
  };

  onGetPosts = (id = 1) => {
    return this.props.GetPostsAction({
      query: {page: id}
    })
  };

  render() {

    const {posts, isRetrievingGetPosts} = this.props;
    if (isRetrievingGetPosts && !posts) {
      return (<div>Loading...</div>);
    }
    if (!posts.length) {
      return null;
    }
    const data = Object.values(posts[0]);
    const metaData = posts[1];

    return (
      <div className="animated fadeIn">
        <Row>
          {
            data && data.map((item, index) => {
              return (
                <Col xs="12" sm="6" md="4" key={index}>
                  <BlogItem
                    {...item}
                    onDeletePost={() => this.onDeletePost(item.id)}
                  />
                </Col>
              )
            })
          }

          <RestPagination
            metaData={metaData}
            onMovePage={this.onGetPosts}
          />

        </Row>
      </div>
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
