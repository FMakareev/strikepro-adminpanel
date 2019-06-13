import React, {Component} from 'react';
import {
  Col,
  Row
} from "reactstrap";
import '../../slides.css';

import {
  DeleteSlideAction,
  GetSlides,
  GetSlidesAction,
  isRetrievingGetSlides
} from "../../../../store/reduxRestEasy/Slides/SlidesResource";

import ItemListTemplate from "../../../../components/ItemListTemplate/ItemListTemplate";
import SlideItem from "../../../../components/SlideItem/SlideItem";

export class SlideList extends Component {


  render() {

    return (<ItemListTemplate
      header={'Список Слайдов'}
      DeleteAction={DeleteSlideAction}
      GetAction={GetSlidesAction}
      GetList={GetSlides}
      isRetrieving={isRetrievingGetSlides}
      ListComponent={({data, onDelete}) => {
        return (<Row>
          {
            data && data.map((item, index) => (
              <Col xs="12" key={index}>
                <SlideItem
                  {...item}
                  onDelete={onDelete}
                />
              </Col>
            ))
          }
        </Row>)
      }}
    />)
  }
}

export default SlideList;
