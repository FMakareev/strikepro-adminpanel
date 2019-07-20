import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getLocales, getMessages } from '../../store/reducers/intl/actions';


class LocaleToggle extends Component {
  render() {
    const { currentLocale, locales, getMessages } = this.props;
    return (
      <select value={currentLocale} onChange={e => getMessages(e.target.value)}>
        {Object.keys(locales).map((locale) => (
          <option key={locale}>{locale}</option>
        ))}
      </select>
    );
  }
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
