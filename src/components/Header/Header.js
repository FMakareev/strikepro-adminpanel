import React, {Component} from 'react';
import {
    Badge,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Nav,
    NavItem,
    NavLink,
    NavbarToggler,
    NavbarBrand,
    DropdownToggle
} from 'reactstrap';

class Header extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    sidebarToggle(e) {
        e.preventDefault();
        document.body.classList.toggle('sidebar-hidden');
    }

    sidebarMinimize(e) {
        e.preventDefault();
        document.body.classList.toggle('sidebar-minimized');
    }

    mobileSidebarToggle(e) {
        e.preventDefault();
        document.body.classList.toggle('sidebar-mobile-show');
    }

    render() {
        return (
            <header className="app-header navbar">
                <NavbarToggler className="d-lg-none" onClick={this.mobileSidebarToggle}>&#9776;</NavbarToggler>
                <NavbarBrand href="#"></NavbarBrand>
                <NavbarToggler className="d-md-down-none" onClick={this.sidebarToggle}>&#9776;</NavbarToggler>
                <Nav className="ml-auto" navbar></Nav>
            </header>
        )
    }
}

export default Header;
