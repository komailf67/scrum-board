import React , {Component} from "react";
import {Form } from 'react-bootstrap';

import $ from "jquery";

export default class Register extends Component{
    registerNewUser = (e) =>{
        e.preventDefault();
        axios.post('/api/user/register',{
            firstName : $('#firstName').val(),
            lastName : $('#lastName').val(),
            email : $('#email').val(),
            password : $('#password').val()
        }).then(response =>{
            let{success , message} = response.data;
        }).catch(error=>{

        })
    }
    
    render(){
        return(
            <Form method="POST" onSubmit={(e)=>{this.registerNewUser(e)}}>
                <div>
                    <input id="firstName" placeholder="firstName" />
                    <input id="lastName" placeholder="lastName" />
                    <input id="email" placeholder="email" />
                    <input id="password" placeholder="password" />
                    <input type="submit" value="register" />
                </div>
            </Form>
        )
    }
}