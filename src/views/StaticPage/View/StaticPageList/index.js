import React, {Component} from 'react';
import ItemListTemplate from "../../../../components/ItemListTemplate/ItemListTemplate";
import {
  DeleteStaticPageAction,
  GetStaticPages,
  GetStaticPagesAction,
  isRetrievingGetStaticPages
} from "../../../../store/reduxRestEasy/StaticPage/StaticPageResource";
import {Col, Row} from "reactstrap";
import StaticPageItem from "../../../../components/StaticPageItem/StaticPageItem";


export class StaticPageList extends Component {
  render() {
    return (<ItemListTemplate
      header={'Список статических страниц'}
      GetList={GetStaticPages}
      isRetrieving={isRetrievingGetStaticPages}
      DeleteAction={DeleteStaticPageAction}
      GetAction={GetStaticPagesAction}
      ListComponent={({data, onDelete}) => {
        console.log(data, onDelete);
        return <Row>
          {
            data && data.map((item, index)=>(<Col
              xs="12"
              sm="6"
              md="4"
              key={index}
            >
              <StaticPageItem
                {...item}
                onDelete={onDelete}
              />
            </Col>))
          }
        </Row>;
      }}
    />)
  }
}

export default StaticPageList;
