import React, {Component, Fragment} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Container } from 'reactstrap';
import { connect } from 'react-redux';//for redux
import PropTypes from 'prop-types';
import RegisterModal from './auth/RegisterModal';
import Logout from './auth/Logout';
import LoginModal from './auth/LoginModal';

class AppNavBar extends Component{
    state={
        isOpen: false
    }

    static propTypes={
        auth: PropTypes.object.isRequired
    }

    toggle=()=>{
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render(){
        const {isAuthenticated, user}=this.props.auth;//mr-3 means margin right 3
        const authLinks=(
            <Fragment>
                <NavItem>
                    <span className='navbar-text mr-3'>
                        <strong>
                            {user ? `Welcome ${user.name}`:''}
                        </strong>
                    </span>
                </NavItem>
                <NavItem>
                    <Logout />
                </NavItem>
            </Fragment>
        );
        const guestLinks=(
            <Fragment>
                <NavItem>
                    <LoginModal />
                </NavItem>
                <NavItem>
                    <RegisterModal />
                </NavItem>
            </Fragment>
        ) 
        return(
            <div>
                <Navbar color="dark" dark expand="sm" className='mb-5'>
                    <Container>
                        <NavbarBrand href='/'>
                            UserItemList
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className='ml-auto' navbar>
                                {isAuthenticated ? authLinks : guestLinks}
                            </Nav>
                        </Collapse>
                    </Container>

                </Navbar>
            </div>
        );
    };
}

const mapStateToProps=state=>({
    auth: state.auth
})
export default connect(mapStateToProps, null)(AppNavBar);