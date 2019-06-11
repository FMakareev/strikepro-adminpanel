import React, {Component} from 'react';
import {
  Col,
  Row
} from "reactstrap";
import {connect as connectRestEasy} from "@brigad/redux-rest-easy";
import '../slides.css';

import {
  DeleteSlideAction,
  GetSlides,
  GetSlidesAction,
  isRetrievingGetSlides
} from "../../../store/reduxRestEasy/Slides/SlidesResource";
import RestPagination from "../../../components/RestPagination/RestPagination";
import SlideItem from "../../../components/SlideItem/SlideItem";

export class SlideList extends Component {

  constructor(props) {
    super(props);
    this.state = this.initialState;
  }

  get initialState() {
    return {}
  }

  componentWillMount() {
    const {location} = this.props;
    const result = location.search.match(/[0-9]/g);
    if(result && result.length){
      this.onGetSlides(result[0]);
    } else {
      this.onGetSlides();
    }
  }

  onGetSlides = (id = 1) => {
    return this.props.GetSlidesAction({
      query: {page: id}
    })
  };

  onDeleteSlide = (id) => {
    return this.props.DeleteSlideAction({
      urlParams: {
        id: id,
      }
    });
  };

  render() {
    const {slides, isRetrievingGetSlides} = this.props;
    if (isRetrievingGetSlides && !slides) {
      return (<div>Loading...</div>);
    }
    if (!slides.length) {
      return null;
    }
    const data = Object.values(slides[0]);
    const metaData = slides[1];

    return (
      <div className="animated fadeIn">
        <Row>

          {
            data && data.map((item, index) => (
              <Col xs="12" key={index}>
                <SlideItem
                  {...item}
                  onDelete={this.onDeleteSlide}
                />
              </Col>
            ))
          }

          <RestPagination
            metaData={metaData}
            onMovePage={this.onGetSlides}
          />
        </Row>
      </div>)
  }
}

SlideList = connectRestEasy(
  (state, ownProps) => ({
    slides: GetSlides(state, ownProps),
    isRetrievingGetSlides: isRetrievingGetSlides(state, ownProps),
  }),
  dispatch => ({
    DeleteSlideAction: (options) => dispatch(DeleteSlideAction(options)),
    GetSlidesAction: (options) => dispatch(GetSlidesAction(options)),
  })
)(SlideList);
export default SlideList;
