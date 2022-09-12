import * as React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
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
      background: `#343a40 url(${BgImage}) center/cover`,
      width: "100vw",
      fontFamily: "Fira Sans, sans-serif",
    }}>
      <Navbar style={{height: "6rem"}} bg="dark" variant="dark" fixed="top" expand="lg" className="bg-opacity-50">
        <Container>
          <Navbar.Brand href="/" className="text-primary">mintthemoon.xyz</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="https://docs.mintthemoon.xyz">Wiki</Nav.Link>
              <Nav.Link href="https://cosmos.mintthemoon.xyz">Explorer</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container style={{paddingTop: "6rem"}}>
        {children}
      </Container>
      <Container style={{marginTop: "6rem"}} fluid className="p-0">
        <footer style={{height: "10rem"}} className="bg-dark bg-opacity-50">
          <Row className="mx-5 pt-4">
            <Col className="text-center mx-auto">
              <h5 className="text-primary-light">Contact</h5>
              <ul style={{listStyleType: "none", paddingLeft: "0px"}}>
                <li className="text-muted">Github <a href="https://github.com/mintthemoon" target="_blank" className="text-primary-light">@mintthemoon</a></li>
                <li className="text-muted">Twitter <a href="https://twitter.com/mintthemoon" target="_blank" className="text-primary-light">@mintthemoon</a></li>
                <li className="text-muted">Discord <span className="text-primary-light">mintthemoon#3970</span></li>
              </ul>
            </Col>
          </Row>
        </footer>
      </Container>
    </Container>
  )
}

export default Layout
