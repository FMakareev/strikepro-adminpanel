import React, {Component} from 'react';
import PageContainer from "../../../../components/PageContainer/PageContainer";
import {connect as connectRestEasy} from "@brigad/redux-rest-easy";

import {
  GetStaticPageAction,
  GetStaticPageById,
  isRetrievingGetStaticPage,
  STATIC_PAGE_RESOURCE_NAME
} from "../../../../store/reduxRestEasy/StaticPage/StaticPageResource";
import FormStaticPage from "./Components/FormStaticPage/FormStaticPage";
import {FormattedMessage} from "react-intl";
import Preloader from "../../../../components/Preloader/Preloader";

export class StaticPageEditor extends Component {
  componentWillMount() {
    const {match: {params}, GetAction} = this.props;
    if (params && params.id) {
      GetAction({
        urlParams: {
          id: params.id,
        }
      });
    }
  }

  render() {
    const {
      item,
      match: {params},
      isRetrieving,
    } = this.props;
    if (isRetrieving && !item) {
      return (<Preloader/>)
    }

    let initialValues = {
      initialValues: item(params && params.id)
    };
    return (<PageContainer
      header={<FormattedMessage
        id="staticPages.editor.title"
      />}
    >
      <FormStaticPage
        {...initialValues}
      />
    </PageContainer>)
  }
}

StaticPageEditor = connectRestEasy(
  (state, ownProps) => ({
    item: (id) => {
      if(!id) return null;
      const data = GetStaticPageById(state, STATIC_PAGE_RESOURCE_NAME, id);
      if (data) {
        return data[id];
      }
      return null;
    },
    isRetrieving: isRetrievingGetStaticPage(state, ownProps),
  }),
  dispatch => ({
    GetAction: (options) => dispatch(GetStaticPageAction(options)),
  })
)(StaticPageEditor);

export default StaticPageEditor;
