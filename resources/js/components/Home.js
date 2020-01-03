import React , {Component} from "react";
import TopMenu from "./Partials/Menus/TopMenu";
import {Container , Row , Col ,Card , ListGroup } from 'react-bootstrap';
import { Link , Route , Switch } from "react-router-dom";
import LeftMenu from "./Partials/Menus/LeftMenu";
import Content from "./Partials/Content";


export default class Home extends Component{
    componentDidMount = () =>{
        let token = localStorage.getItem('access_token');
        let config = {
            headers: {'Authorization': "bearer " + token}
        };
        axios.get( 
            '/api/',
            config
        ).then(response =>{
            let{success , message} = response.data;
        }).catch(error =>{

        });
    }
    render(){
        return(
            <React.Fragment>
                <TopMenu />
                <Container>
                    <Row>
                        <LeftMenu />
                        <Content />
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}