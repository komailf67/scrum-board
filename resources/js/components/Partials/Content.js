import React, { Component } from "react";
import { Col, Card } from 'react-bootstrap';
import { Route, Switch } from "react-router-dom";
import Register from "../Auth/Register";
import Projects from "../Panel/Projects";
export default class Content extends Component {
    render() {
        return (
            <Col sm={9}>
                <Card >
                    <Card.Header>Content</Card.Header>
                    <Card.Body>
                        <Switch>
                            <Route path="/register" component={Register} />
                            <Route path="/projects" component={Projects} />
                        </Switch>
                    </Card.Body >
                </Card>
            </Col>
        )
    }
}