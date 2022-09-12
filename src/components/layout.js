import * as React from 'react'
import {Link, useStaticQuery, graphql} from 'gatsby'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import '@fontsource/fira-sans'

import BgImage from '../images/bg.jpg'

const Layout = ({pageTitle, children}) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Container fluid style={{
      backgroundImage: `url(${BgImage})`, 
      backgroundSize: "cover", 
      minHeight: "100vh",
      fontFamily: "Fira Sans, sans-serif"
    }}>
      <Navbar bg="dark" variant="dark" fixed="top" expand="lg" className="bg-opacity-75">
        <Container>
          <Navbar.Brand href="/" className="text-primary">mintthemoon.xyz</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="https://docs.mintthemoon.xyz">Wiki</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container style={{paddingTop: "6rem"}}>
        {children}
      </Container>
    </Container>
  )
}

export default Layout
