import React, {Component} from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import { setDefaultLocale, registerLocale }  from "react-datepicker";
import ru from 'date-fns/locale/ru';
import history from "./history";

import './App.scss';
import UIKitRoutes from "./views/UIKit/UIKitRoutes";
import UIKitNavigation from './views/UIKit/UIKitNavigation';

import {AppRoutes} from "./views/AppRoutes";
import {AppNavigation} from "./views/AppNavigation";

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

// Pages
const Login = React.lazy(() => import('./views/Auth/Login/Login'));
const Register = React.lazy(() => import('./views/Pages/Register'));
const Page404 = React.lazy(() => import('./views/Pages/Page404'));
const Page500 = React.lazy(() => import('./views/Pages/Page500'));

registerLocale('ru', ru);
setDefaultLocale('ru');


history.listen(location => {

});

class App extends Component {

  render() {
    return (
      <HashRouter>
        <React.Suspense fallback={loading()}>
          <Switch>
            <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>}/>
            <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>}/>
            <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>}/>
            <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>}/>
            <Route path="/uikit" name="UIKit" render={props => <DefaultLayout
              navigation={UIKitNavigation}
              baseRoute={'/uikit'}
              routes={UIKitRoutes}
              {...props}
            />}/>
            <Route path="/" name="Home" render={props => <DefaultLayout
              navigation={AppNavigation}
              baseRoute={''}
              routes={AppRoutes}
              {...props}/>}
            />
          </Switch>
        </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
