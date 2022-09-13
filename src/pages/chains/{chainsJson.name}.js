import * as React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import '../../styles/theme.scss'

export const query = graphql`
  query ($id: String) {
    chainsJson(id: {eq: $id}) {
      name
    }
  }
`

const ChainPage = ({data}) => {
  return (
    <main>
      <Layout pageTitle="mintthemoon.xyz">
        <Container className="bg-dark rounded mt-5">
          <Row className="pt-2">
            <h1 className="text-primary-light">{data.chainsJson.name} Chain Details</h1>
          </Row>
        </Container>
      </Layout>
    </main>
  )
}

export const Head = () => <Seo title="Home" />

export default ChainPage