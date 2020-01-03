import React, { Component } from "react";
import { Col, Card } from 'react-bootstrap';
import { Route, Switch } from "react-router-dom";
import Register from "../Auth/Register";
export default class Content extends Component {
    render() {
        return (
            <Col sm={9}>
                <Card >
                    <Card.Header>mohtava</Card.Header>
                    <Card.Body>
                        <Switch>
                            <Route path="/register" component={Register} />
                        </Switch>
                    </Card.Body >
                </Card>
            </Col>
        )
    }
}