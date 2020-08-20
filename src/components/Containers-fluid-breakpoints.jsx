import React, { Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const ContainersFluidBreakpoints = () => {
    return (
        <Fragment>
            <Container fluid="md">
                <Row>
                    <Col>
                        1 de 1
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default ContainersFluidBreakpoints