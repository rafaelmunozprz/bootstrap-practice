import React, { Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const AutoLayoutColumns = () => {
    return (
        <Fragment>
            <Container>
                <Row>
                    <Col>1 de 2</Col>
                    <Col>2 de 2</Col>
                </Row>
                <Row>
                    <Col>1 de 3</Col>
                    <Col>2 de 2</Col>
                    <Col>3 de 3</Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default AutoLayoutColumns