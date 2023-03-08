import * as React from 'react'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// import FormatNumber from './format-number'

const ChainCard = ({chain}) => {
  // const [stakingInfo, setStakingInfo] = React.useState({})
  // const getStakingInfo = () => {
  //   fetch(`${chain.lcd}/cosmos/staking/v1beta1/validators/${chain.valoper}`)
  //     .then(response => response.json())
  //     .then(result => {setStakingInfo(result.validator)})
  //     .catch(console.log)
  // }
  // React.useEffect(() => {
  //   getStakingInfo()
  //   const interval = setInterval(() => {getStakingInfo()}, 5000)
  //   return () => clearInterval(interval)
  // })

  return (
    <Card bg="dark" text="light" style={{width: "calc(280px + 5vw)"}} className="text-center p-2 mx-auto">
      <Row className="g-0">
        <Col md={4} className="d-flex">
          <Card.Img variant="top" src={chain.logo} className="p-4 p-md-2 align-middle"/>  
        </Col>
        <Col md={8}>
          <Card.Title className="mt-2 mb-0">{chain.name}</Card.Title>
          <Card.Text className="text-muted">{chain.chain_id}</Card.Text>
          <Card.Text className="mb-1">
            <ButtonGroup>
              <Button variant="outline-primary" href={`${chain.docs}/resources`} target="_blank">Docs</Button>
              <Button variant="outline-primary" href={chain.statesync} target="_blank">Sync</Button>
              <Button variant="primary text-dark" href={chain.stake} target="_blank">Stake</Button>
            </ButtonGroup>
          </Card.Text>
          {/* <Card.Text className="mb-1 mt-0 text-secondary text-opacity-75">
            <FormatNumber exponent={chain.native_assets[0].exponent} decimals="0">
              {stakingInfo.tokens}
            </FormatNumber>
            &nbsp;{chain.native_assets[0].symbol} staked!
          </Card.Text> */}
        </Col>
      </Row>
    </Card>
  )
}

export default ChainCard