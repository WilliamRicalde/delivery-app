import {
  Container,
  Row,
  Col,
  Text
} from '@nextui-org/react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <Container>
      <Row fluid>
        <Col>
          <Text>Navbar</Text>
        </Col>
        <Col>
          <Link href="/home">Home</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </Col>
      </Row>
    </Container>
  )
}