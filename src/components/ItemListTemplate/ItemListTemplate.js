import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from "react-router-dom";
import {connect as connectRestEasy} from "@brigad/redux-rest-easy";

import {RestPagination} from "../RestPagination/RestPagination";
import {PageContainer} from "../PageContainer/PageContainer";


export class ItemListTemplate extends Component {

  static propTypes = {
    /** заголовок страницы */
    header: PropTypes.any,
    /** список элементов */
    list: PropTypes.any,
    /** статус загрузки */
    isRetrieving: PropTypes.any,
    /** экшен для удаления*/
    DeleteAction: PropTypes.func,
    /** экшен для получения */
    GetAction: PropTypes.func,
    /** вытащить из хранилища данные */
    GetList: PropTypes.func,
    /** компонент отвечающий за отображение списка */
    ListComponent: PropTypes.element,
  };

  static defaultProps = {
    header: null,
    list: [],
    DeleteAction: () => null,
    GetAction: () => null,
    ListComponent: () => (<div>empty</div>)
  };

  componentWillMount() {
    this.onGetList(this.getPaginationParam());
  }

  getPaginationParam = () => {
    try {
      const {location} = this.props;
      const result = location.search.match(/page=[0-9]/gi);
      if (result && result.length) {
        return result[0].match(/[0-9]/g)[0]
      }
      return 1;
    } catch (e) {
      console.log('Error getPaginationParam: ', e);
      return 1;
    }
  };

  onDelete = (id) => {
    const {DeleteAction} = this.props;
    return DeleteAction && DeleteAction({
      urlParams: {
        id: id,
      }
    });
  };

  onGetList = (id = 1) => {
    const {GetAction} = this.props;
    return GetAction && GetAction({
      query: {page: id}
    })
  };

  render() {
    const {list, isRetrieving, ListComponent, header} = this.props;

    if (isRetrieving && !list.length) {
      return (<div>Loading...</div>);
    }
    if (!list.length) {
      return null;
    }
    const data = Object.values(list[0]);
    const metaData = list[1];

    return (
      <PageContainer
        header={header}
      >
        {
          ListComponent &&
          <ListComponent
            data={data}
            metaData={metaData}
            onDelete={this.onDelete}
          />
        }

        <RestPagination
          metaData={metaData}
          onMovePage={this.onGetList}
        />
      </PageContainer>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  const {GetList, isRetrieving} = ownProps;
  if (!GetList) console.log('GetList in undefined');

  return ({
    ...(GetList ? {list: GetList(state, ownProps),} : {}),
    ...(isRetrieving ? {isRetrieving: isRetrieving(state, ownProps),} : {}),
  })
};
const mapDispatchToProps = (dispatch, {DeleteAction, GetAction}) => {
  if (!DeleteAction) console.log('DeleteAction in undefined');
  if (!GetAction) console.log('GetAction in undefined');

  return ({
    ...(DeleteAction ? {DeleteAction: id => dispatch(DeleteAction(id))} : {}),
    ...(GetAction ? {GetAction: id => dispatch(GetAction(id))} : {}),
  });
};

ItemListTemplate = connectRestEasy(
  mapStateToProps,
  mapDispatchToProps,
)(ItemListTemplate);

ItemListTemplate = withRouter(ItemListTemplate);

export default ItemListTemplate;
