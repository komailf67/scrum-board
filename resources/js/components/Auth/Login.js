import React , {Component} from "react";
import $ from "jquery";



export default class Login extends Component{

    login =()=>{
        axios.post('/api/user/login',{
            email : $('#email').val(),
            password : $('#password').val()
        })      
        .then(response =>{  
            let{success , message , token} = response.data;
            localStorage.setItem('access_token',token);
        }).catch(error =>{
            console.log(error);
        })
    };
    
    render(){
        return(
            <div>
                <input id="email" placeholder="email" />
                <input id="password" placeholder="password" />
                <input onClick ={()=>{this.login()}} type="button" value="login" />
            </div>
            // onSubmit={(e)=>{this.registerNewUser(e)
        )
    }
}