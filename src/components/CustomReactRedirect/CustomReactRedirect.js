import BrowserHistory from "../../history";
import {Redirect, withRouter} from "react-router-dom";
import React, {Component} from "react";

<<<<<<< HEAD
=======
/** DEPRECATED */
>>>>>>> a3180f5da718ac899fb9f404f73e60e692dcadbe
export class CustomReactRedirect extends Component {
  state = {
    pathname: null,
    unlisten: null,
  };

  componentDidMount() {
    const unlisten = BrowserHistory.listen(location => {
<<<<<<< HEAD
      if (location.pathname) {
        this.setState({pathname: location.pathname});
      }
=======
      const {pathname} = this.state;
>>>>>>> a3180f5da718ac899fb9f404f73e60e692dcadbe
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
