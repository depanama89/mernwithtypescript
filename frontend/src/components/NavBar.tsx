import React from 'react'
import { User } from '../models/user'
import { Container, Nav, Navbar } from 'react-bootstrap'
import NavBarLoggedInView from './NavBarLoggedInView'
import NavBarLoggedOutView from './NavBarLoggedOutView'

interface NavBarProps{
    loggedInUser?:User | null
    onSignUpClicked:()=>void
    onLoginClicked:()=>void
    onLogoutClicked:()=>void
}
const NavBar = ({loggedInUser,onSignUpClicked,onLoginClicked,onLogoutClicked}:NavBarProps) => {

  return (
    <Navbar bg='primary' variant="dark" expand="sm" sticky='top'>
        <Container>
            <Navbar.Brand href="#home">
                Notes App
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="main-navbar" />
                <Navbar.Collapse id="main-navbar">
                    <Nav className='ms-auto'>
                        {
                            loggedInUser ?(
                                <NavBarLoggedInView user={loggedInUser } onLogoutSuccessful={onLogoutClicked}/>
                            ) :(
                               <NavBarLoggedOutView onLoginClicked={onLoginClicked} onSignUpClicked={onSignUpClicked}/>
                            )
                        }
                    </Nav>
                    </Navbar.Collapse>
            

        </Container>
    </Navbar>
  )
}

export default NavBar