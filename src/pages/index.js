import * as React from 'react'
import {Link, useStaticQuery, graphql} from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css'

import '../styles/theme.scss'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allChainsJson(sort: {fields: name, order: DESC}) {
        nodes {
          name
          logo
        }
      }
    }
  `)

  return (
    <main>
      <Layout pageTitle="Home">
        <Row style={{marginTop: "10rem"}}>
          <h1 style={{letterSpacing: "0.8rem", fontSize: "4rem"}} className="text-center text-light">
            <span className="fw-bold text-primary">mint</span>themoon
          </h1>
        </Row>
        <Row className="mt-2">
          <h5 className="text-center text-light">Quality Validation and Development Services</h5>
        </Row>
        <Row style={{marginTop: "6rem"}}>
          <h2 className="text-center text-light">Cosmos Blockchains</h2>
        </Row>
        <Row className="w-75 mx-auto mt-3">
        {
          data.allChainsJson.nodes.map((chain) => (
            <Col>
              <Card style={{width: "18rem"}} className="text-center mx-auto">
                <Card.Img variant="top" src={chain.logo}/>
                <Card.Title>{chain.name}</Card.Title>
              </Card>
            </Col>
          ))
        }
        </Row>
      </Layout>
    </main>
  )
}

export const Head = () => <Seo title="Welcome" />

export default IndexPage
