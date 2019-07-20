import React, {PureComponent} from 'react';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';
import PropTypes from 'prop-types';
import classNames from 'classnames';

let router;

const getPaths = (pathname) => {
  const paths = ['/'];

  if (pathname === '/') return paths;

  pathname.split('/').reduce((prev, curr) => {
    const currPath = `${prev}/${curr}`;
    paths.push(currPath);
    return currPath;
  });
  return paths;
};

const findRouteName2 = (url, appRoutes, router) => {
  const matchPath = router.matchPath;
  const aroute = appRoutes.find(route => matchPath(url, {path: route.path, exact: route.exact}));
  return (aroute && aroute.name) ? aroute.name : null
};

const BreadcrumbsItem2 = ({match, appRoutes, router}) => {
  const routeName = findRouteName2(match.url, appRoutes, router);
  const Link = router.Link;
  if (routeName) {
    return (
      match.isExact ?
        <BreadcrumbItem active>{routeName}</BreadcrumbItem>
        :
        <BreadcrumbItem>
          <Link to={match.url || ''}>
            {routeName}
          </Link>
        </BreadcrumbItem>
    );
  }
  return null;
};

BreadcrumbsItem2.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string
  })
};

const Breadcrumbs2 = (props) => {
  console.log(props);
  const {location, router, appRoutes} = props;
  console.log(router);
  const Route = router.Route;
  const paths = getPaths(location.pathname);
  const items = paths.map((path, i) => <Route
    key={i.toString()}
    path={path}
    appRoutes={appRoutes}
    router={router}
    component={(args)=><BreadcrumbsItem2 {...args} {...props}/>}
  />);
  return (
    <Breadcrumb>
      {items}
    </Breadcrumb>
  );
};

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  appRoutes: PropTypes.any,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  router: PropTypes.any
};

const defaultProps = {
  tag: 'div',
  className: '',
  appRoutes: [{path: '/', exact: true, name: 'Home', component: null}]
};

class AppBreadcrumb2 extends PureComponent {
  constructor(props) {
    super(props);

    // this.state = {routes: props.appRoutes};
    // routes = this.state.routes;
    // router = props.router;
  }

  render() {
    const {className, tag: Tag,  ...attributes} = this.props;

    console.log('attributes: ', this.props);
    delete attributes.children;
    // delete attributes.appRoutes;
    // delete attributes.router;

    const classes = classNames(className);

    const Route = attributes.router.Route;
    return (
      <Tag className={classes}>
        <Route path="/:path" component={(props)=><Breadcrumbs2 {...props} {...attributes} />} {...attributes} />
      </Tag>
    );
  }
}

AppBreadcrumb2.propTypes = propTypes;
AppBreadcrumb2.defaultProps = defaultProps;

export default AppBreadcrumb2;
