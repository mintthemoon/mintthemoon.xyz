import * as React from 'react'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ChainCard = ({chain_name, chain_id, chain_logo, chain_docs, chain_sync, chain_stake}) => {
    return (
        <Card bg="dark" text="light" style={{width: "calc(280px + 5vw)"}} className="text-center p-2 mx-auto">
            <Row className="g-0">
            <Col md={4}>
                <Card.Img variant="top" src={chain_logo} className="p-4 p-md-2 mt-1"/>  
            </Col>
            <Col md={8}>
                <Card.Title className="mt-2 mb-0">{chain_name}</Card.Title>
                <Card.Text className="text-muted">{chain_id}</Card.Text>
                <Card.Text className="mb-2">
                <ButtonGroup>
                    <Button variant="outline-primary" href={`${chain_docs}/resources`} target="_blank">Docs</Button>
                    <Button variant="outline-primary" href={chain_sync} target="_blank">Sync</Button>
                    <Button variant="primary text-dark" href={chain_stake} target="_blank">Stake</Button>
                </ButtonGroup>
                </Card.Text>
            </Col>
            </Row>
        </Card>
    )
}

export default ChainCard