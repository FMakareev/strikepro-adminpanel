import React, {Component} from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Table
} from "reactstrap";
import {connect as connectRestEasy} from "@brigad/redux-rest-easy";
import {
  DeleteCategoryAction,
  GetCategories,
  GetCategoriesAction,
  isRetrievingCategories
} from "../../../store/reduxRestEasy/Blog/BlogCategoryResource";
import RestPagination from "../../../components/RestPagination/RestPagination";
import CategoryItem from "../../../components/CategoryItem/CategoryItem";


export class CategoryList extends Component {

  constructor(props) {
    super(props);

    this.onGetCategory = this.onGetCategory.bind(this);
    this.onDeleteCategory = this.onDeleteCategory.bind(this);
  }



  componentWillMount() {
    const {location} = this.props;
    const result = location.search.match(/[0-9]/g);
    if(result && result.length){
      this.onGetCategory(result[0]);
    } else {
      this.onGetCategory();
    }
  }

  onGetCategory = (id = 1) => {
    return this.props.GetCategoriesAction({
      query: {page: id}
    })
  };

  onDeleteCategory(id) {
    return this.props.DeleteCategoryAction({
      urlParams: {
        id: id,
      }
    });
  }


  render() {
    const {categories, isRetrievingGetPosts} = this.props;
    if (isRetrievingGetPosts && !categories) {
      return (<div>Loading...</div>);
    }
    if (!categories.length) {
      return null;
    }
    const data = Object.values(categories[0]);
    const metaData = categories[1];
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12">
            <Card>
              <CardHeader>
                <strong>Categories</strong>
              </CardHeader>
              <CardBody className="card-body">
                <Table hover bordered striped responsive size="sm">
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
                        onDelete={this.onDeleteCategory}
                      />
                    ))
                  }
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>


          <RestPagination
            metaData={metaData}
            onMovePage={this.onGetSlides}
          />

        </Row>
      </div>
    )
  }
}

CategoryList = connectRestEasy(
  (state, ownProps) => ({
    categories: GetCategories(state, ownProps),
    isRetrievingCategories: isRetrievingCategories(state, ownProps),
  }),
  dispatch => ({
    GetCategoriesAction: (options) => dispatch(GetCategoriesAction(options)),
    DeleteCategoryAction: (options) => dispatch(DeleteCategoryAction(options)),
  })
)(CategoryList);

export default CategoryList;
