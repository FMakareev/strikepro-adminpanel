import BrowserHistory from "../../history";
import {Redirect, withRouter} from "react-router-dom";
import React, {Component} from "react";

/** DEPRECATED */
export class CustomReactRedirect extends Component {
  state = {
    pathname: null,
    unlisten: null,
  };

  componentDidMount() {
    const unlisten = BrowserHistory.listen(location => {
      const {pathname} = this.state;
    });
    this.setState({
      unlisten: unlisten,
    });
  }

  componentWillUnmount() {
    if (this.state && this.state.unlisten) {
      this.state.unlisten();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      this.setState({
        pathname: null,
      });
    }
  }

  render() {
    const {pathname} = this.state;
    if (pathname) {
      // const clonePathName = pathname;
      // this.setState({pathname: null});
      return <Redirect to={pathname}/>
    }
    return null;
  }
}

CustomReactRedirect = withRouter(CustomReactRedirect);

export default CustomReactRedirect;
