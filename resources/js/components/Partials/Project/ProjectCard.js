import React, { Component } from "react";
import { Card } from 'react-bootstrap';
import { Link } from "react-router-dom";

class ProjectCard extends Component {
    render() {
        let {id , title , fullName} = this.props.project;
        console.log(this.props);
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Creator : {fullName}</Card.Subtitle>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}
export default ProjectCard;