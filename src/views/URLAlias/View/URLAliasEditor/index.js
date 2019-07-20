import React, {Component} from 'react';
import {connect as connectRestEasy} from "@brigad/redux-rest-easy";
import {
  GetUrlAliasAction,
  GetUrlAliasById,
  isRetrievingGetUrlAlias,
  URL_ALIAS_RESOURCE_NAME
} from "../../../../store/reduxRestEasy/UrlAlias/UrlAliasResource";
import FormURLAliasEditor from "./Components/FormURLAliasEditor/FormURLAliasEditor";
import Preloader from "../../../../components/Preloader/Preloader";


export class URLAliasEditor extends Component {

  componentWillMount() {
    const {match: {params}, GetUrlAliasAction} = this.props;
    if (params && params.id) {
      GetUrlAliasAction({
        urlParams: {
          id: params.id,
        }
      });
    }
  }

  render() {
    const {urlAlias, match: {params}, isRetrievingGetUrlAlias} = this.props;

    if (isRetrievingGetUrlAlias) {
      return (<Preloader/>)
    }

    let initialValues = {
      initialValues: params && params.id && urlAlias(params.id)
    };
    return (
      <FormURLAliasEditor {...initialValues}/>
    )
  }
}

URLAliasEditor = connectRestEasy(
  (state, ownProps) => ({
    urlAlias: (id) => {
      const data = GetUrlAliasById(state, URL_ALIAS_RESOURCE_NAME, id, ownProps);
      if (data) {
        return data[id];
      }
      return null;
    },
    isRetrievingGetUrlAlias: isRetrievingGetUrlAlias(state, ownProps),
  }),
  dispatch => ({
    GetUrlAliasAction: (options) => dispatch(GetUrlAliasAction(options)),
  })
)(URLAliasEditor);

export default URLAliasEditor;
