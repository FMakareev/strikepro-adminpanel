import React, {Component, Suspense} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import * as router from 'react-router-dom';
import {Container} from 'reactstrap';

import {
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav2 as AppSidebarNav,
} from '@coreui/react';
import CustomReactRedirect from "../../components/CustomReactRedirect/CustomReactRedirect";
import {injectIntl} from "react-intl";
import Preloader from "../../components/Preloader/Preloader";

const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));


class DefaultLayout extends Component {

  loading = () => <div className="animated fadeIn pt-1 text-center"><Preloader/></div>;

  signOut(e) {
    e.preventDefault();
    this.props.history.push('/login')
  }

  combineBaseRouteWithRoutes = (navigation, baseRoute) => {
    return Array.from(navigation, i => Object.assign({}, i))
      .map((item) => {
        if (item.url) {
          item.url = `${baseRoute}${item.url}`;
        }
        if (item.children) {
          item.children = this.combineBaseRouteWithRoutes(item.children, baseRoute)
        }
        return item;
      })
  };

  translateRoutesName = (routes) => {

    const {intl} = this.props;

    if (Array.isArray(routes) && routes.length && intl && intl.messages) {
      return Array.from(routes, (i) => Object.assign({}, i))
        .map((item) => {
          if(hasOwnProperty.call(intl.messages, item.name )){
            item.name = intl.messages[item.name];
          }
          return item
        })
    }
    return routes;
  }

  render() {
    const {routes, baseRoute, navigation} = this.props;

    return (
      <div className="app">
        <AppHeader fixed>
          <Suspense fallback={this.loading()}>
            <DefaultHeader onLogout={e => this.signOut(e)}/>
          </Suspense>
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarHeader/>
            <AppSidebarForm/>
            <Suspense>
              <AppSidebarNav
                baseRoute={baseRoute}
                navConfig={{
                  items: this.combineBaseRouteWithRoutes(navigation.items, baseRoute),
                }}
                {...this.props}
                router={router}
              />
            </Suspense>
            <AppSidebarFooter/>
            <AppSidebarMinimizer/>
          </AppSidebar>
          <main className="main">
            {/*<AppBreadcrumb appRoutes={this.translateRoutesName(routes)} router={router}/>*/}
            <Container style={{padding: '30px'}} fluid>
              <Suspense fallback={this.loading()}>
                <Switch>
                  {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={baseRoute + route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => (
                          <route.component {...props} />
                        )}/>
                    ) : (null);
                  })}
                  <Redirect from="/" to="/dashboard"/>
                </Switch>
              </Suspense>
            </Container>
          </main>
        </div>
        <AppFooter>
          <Suspense fallback={this.loading()}>
            <DefaultFooter/>
          </Suspense>
        </AppFooter>
        <CustomReactRedirect/>
      </div>
    );
  }
}

export default injectIntl(DefaultLayout);
