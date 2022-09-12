import * as React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css'

import Layout from '../components/layout'
import Seo from '../components/seo'
import '../styles/theme.scss'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allChainsJson(sort: {fields: name, order: DESC}) {
        nodes {
          name
          chain_id
          logo
          docs
          statesync
          stake
        }
      }
    }
  `)

  return (
    <main>
      <Layout pageTitle="Home">
        <Row style={{marginTop: "8rem"}}>
          <h1 style={{letterSpacing: "0.8rem", fontSize: "4rem"}} className="text-center text-light">
            <span className="fw-bold text-primary">mint</span>themoon
          </h1>
        </Row>
        <Row>
          <p className="lead text-center text-light">Quality Validation and Development Services</p>
        </Row>
        <Row style={{marginTop: "4rem"}}>
          <Col xl={6} lg={8} md={10} className="mx-auto">
            <h2 className="text-primary-light fw-bold">mintthemoon is an independent community-focused validator</h2>
            <p className="text-light fs-4">We love the Cosmos! The opportunities are endless and we're just getting started. Our goal is to support builders (ourselves included) with quality tools and to provide the best validation service we possibly can.</p>
          </Col>
        </Row>
        <Row className="mt-5">
          <h2 className="text-center text-light">Cosmos Blockchains</h2>
        </Row>
        <Row className="mx-auto mt-2">
          <Col xl={10} xxl={8} className="mx-auto d-lg-inline-flex">
          {
            data.allChainsJson.nodes.map((chain) => (
              <Col className="mb-4">
                <Card bg="dark" text="light" style={{width: "24rem"}} className="text-center mx-auto">
                  <Row className="g-0">
                    <Col md={4}>
                      <Card.Img variant="top" src={chain.logo} className="p-5 p-md-2 mt-1"/>  
                    </Col>
                    <Col md={8}>
                      <Card.Title className="mt-3 mb-0">{chain.name}</Card.Title>
                      <Card.Text className="text-muted">{chain.chain_id}</Card.Text>
                      <Card.Text className="mb-3">
                        <ButtonGroup>
                          <Button variant="outline-primary" href={`${chain.docs}/resources`} target="_blank">Docs</Button>
                          <Button variant="outline-primary" href={chain.statesync} target="_blank">Sync</Button>
                          <Button variant="primary text-dark" href={chain.stake} target="_blank">Stake</Button>
                        </ButtonGroup>
                      </Card.Text>
                    </Col>
                  </Row>
                </Card>
              </Col>
            ))
          }
          </Col>
        </Row>
        <Row style={{marginTop: "4rem"}}>
          <Col lg={8} md={10} className="mx-auto">
            <h2 className="text-center text-light">Validator Operations</h2>
            <div className="text-light fs-5">
              <p>Validating a blockchain is a responsibility we take seriously! Here's how we protect the chain and your stake:</p>
              <ul>
                <li>Geographically distributed sentry nodes to ensure high availabilty.</li>
                <li>2-of-3 threshold block signatures using <a href="https://github.com/strangelove-ventures/horcrux" target="_blank" className="text-primary-light">horcrux</a>.</li>
                <li>Multiple redundant monitoring systems to alert on any issues.</li>
              </ul>
              <p>We are always looking to improve and expand. Next on the list is to reduce reliance on third parties by investing in our own server hardware. Stake with us if you'd like to support this effort!</p>
            </div>
          </Col>
        </Row>
      </Layout>
    </main>
  )
}

export const Head = () => <Seo title="Welcome" />

export default IndexPage
