import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Badge, Nav, NavItem} from 'reactstrap';
import classNames from 'classnames';
import nav from './_nav'


const BadgeCustom = (props) => (<Badge
  className={classNames(props.class)}
  color={props.variant}>
  {props.text}
</Badge>);

const NavItemCustom = ({item, index}) => (
  <NavItem key={`NavItemCustom-${index}`}>
    <NavLink to={item.url} className={classNames("nav-link", item.class)} activeClassName="active">
      {item.icon && <i className={item.icon}/>}{item.name} <BadgeCustom {...item.badge}/>
    </NavLink>
  </NavItem>
);

const Wrapper = ({wrapper, name,}) => (!wrapper ?
  <span>{name}</span> :
  (React.createElement(wrapper.element, wrapper.attributes, name)));

const Title = ({title, index,...rest}) => (<li
  key={`Title-${index}`}
  className={classNames("nav-title", title && title.class)}>
  <Wrapper {...title} {...rest}/>
</li>);

const Divider = ({index}) => (<li key={`Divider-${index}`} className="divider"/>);

const NavDropdown = ({item, index, activeRoute, handleClick}) => (
  <li
    key={`NavDropdown-${key}`}
    className={activeRoute(item.url, props)}
  >
    <a
      className={"nav-link nav-dropdown-toggle"}
      href={"#"}
      onClick={handleClick.bind(this)}
    >
      {item.icon && <i className={item.icon}/>}
      {item.name}
    </a>
    <ul
      className={'nav-dropdown-items'}
    >
      <NavList items={item.children}/>
    </ul>
  </li>);

const NavLinkCustom = (props) =>
  props.item.title ? <Title {...props} {...props.item}/> :
    props.item.divider ? <Divider {...props} {...props.item}/> :
      props.item.children ? <NavDropdown {...props} {...props.item}/>
        : <NavItemCustom {...props} {...props.item}/>;


const NavList = ({items, ...rest}) => (<div>
  {
    items.map((item, index) => (<NavLinkCustom
      {...rest}
      item={item}
      index={index}
      key={`NavLinkCustom-${index}`}
    />))
  }
</div>);

class Sidebar extends Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.activeRoute = this.activeRoute.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    e.target.parentElement.classList.toggle('open');
  }

  activeRoute(routeName, props) {
    // return this.props.location.pathname.indexOf(routeName) > -1 ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown';
    return props.location.pathname.indexOf(routeName) > -1 ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown';

  }

  // todo Sidebar nav secondLevel
  // secondLevelActive(routeName) {
  //   return this.props.location.pathname.indexOf(routeName) > -1 ? "nav nav-second-level collapse in" : "nav nav-second-level collapse";
  // }


  render() {
    return (
      <div className="sidebar">
        <nav className="sidebar-nav">
          <Nav>
            <NavList items={nav.items} activeRoute={this.activeRoute} handleClick={this.handleClick}/>
          </Nav>
        </nav>
      </div>
    )
  }
}

export default Sidebar;
