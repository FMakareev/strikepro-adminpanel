import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getLocales, getMessages} from '../../store/reducers/intl/actions';
import {CardBody, Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";


const LocaleToggle = (props) => {
  const {currentLocale, locales, getMessages} = props;
  const [state, setState] = React.useState(false);
  return (
    <div className={'lang-switch__wrapper'}>
      <Dropdown  size="sm"  isOpen={state} toggle={() => {
        setState(!state)
      }}>
        <DropdownToggle caret>
          {currentLocale}
        </DropdownToggle>
        <DropdownMenu>
          {Object.keys(locales).map((locale) => (
            <DropdownItem
              onClick={() => getMessages(locale)}
              active={locale === currentLocale}
              key={locale}>{locale}</DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentLocale: state.intl && state.intl.locale,
  locales: state.locales,
});

const mapDispatchToProps = (dispatch) => ({
  getLocales: () => dispatch(getLocales()),
  getMessages: (locale) => dispatch(getMessages(locale)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LocaleToggle);
