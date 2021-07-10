import React, {useEffect, useState} from 'react'
import {Button, Form, FormControl, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

import logo from '../logo.png'
import {Link, Route, Switch} from "react-router-dom";
import AuthService from '../service/auth.service'
import Registration from "../componets/Registration";
import Home from "../componets/home/Home";
import Fanfic from "../componets/fanfic/Fanfic";
import Chapter from "../componets/chapter/Chapter";
import UserMenu from "./UserMenu";

const Navigation= (props) => {
    const [user, setUser] = useState(AuthService.getCurrentUser())

    const logout = () => {
        AuthService.logout()
        setUser(null)
    }

    const debug = () => {
        alert(JSON.stringify(user, null ,2))
    }

    return (
        <>
            <Navbar bg='light' expand='lg'>
                <LinkContainer to='/'>
                    <Navbar.Brand><img src={logo} alt={'logo'}/>Mordor</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='mr-auto'>
                        <NavDropdown title='Fandoms' id='basic-nav-dropdown'>
                            <LinkContainer to='/test'>
                                <NavDropdown.Item>Fandom 1</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to='/test1'>
                                <NavDropdown.Item >Fandom 2</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to='/test2'>
                                <NavDropdown.Item>Fandom 3</NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>
                    </Nav>
                    { !user ?
                        <>
                            <LinkContainer to='/login'>
                                <Nav.Link>Login</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/sign-up'>
                                <Nav.Link>Sign up</Nav.Link>
                            </LinkContainer>
                        </>
                        :
                        <UserMenu logoutHandler={logout}/>
                    }
                </Navbar.Collapse>
            </Navbar>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/fanfic" component={Fanfic} />
                <Route exact path="/chapter" component={Chapter} />
            </Switch>
        </>
    )
}

export default Navigation