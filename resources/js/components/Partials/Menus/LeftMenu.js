import React, { Component } from "react";
import { Col, Card, ListGroup } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default class LeftMenu extends Component {
    render() {
        return (
            <Col sm={3}>
                <Card>
                    <Card.Header>Featured</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <Link to="/projects">Projects</Link>
                        </ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        )
    }
}