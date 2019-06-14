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
  AppBreadcrumb2 as AppBreadcrumb,
  AppSidebarNav2 as AppSidebarNav,
} from '@coreui/react';
import CustomReactRedirect from "../../components/CustomReactRedirect/CustomReactRedirect";

const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));


class DefaultLayout extends Component {

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>;

  signOut(e) {
    e.preventDefault();
    this.props.history.push('/login')
  }

  combineBaseRouteWithRoutes = (navigation, baseRoute) => {
    return Array.from(navigation, i => Object.assign({}, i)).map((item) => {
      if (item.url) {
        item.url = `${baseRoute}${item.url}`;
      }
      if (item.children) {
        item.children = this.combineBaseRouteWithRoutes(item.children, baseRoute)
      }
      return item;
    })
  };

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
<<<<<<< HEAD
              <AppSidebarNav baseRoute={baseRoute} navConfig={{
                items: this.combineBaseRouteWithRoutes(navigation.items, baseRoute),
              }} {...this.props} router={router}/>
=======
              <AppSidebarNav
                baseRoute={baseRoute}
                navConfig={{
                  items: this.combineBaseRouteWithRoutes(navigation.items, baseRoute),
                }}
                {...this.props}
                router={router}
              />
>>>>>>> a3180f5da718ac899fb9f404f73e60e692dcadbe
            </Suspense>
            <AppSidebarFooter/>
            <AppSidebarMinimizer/>
          </AppSidebar>
          <main className="main">
            <AppBreadcrumb appRoutes={routes} router={router}/>
            <Container fluid>
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

export default DefaultLayout;
