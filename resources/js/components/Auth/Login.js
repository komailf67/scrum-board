import React , {Component} from "react";
import $ from "jquery";
class Login extends Component{
    componentDidMount = () =>{
        let token = localStorage.getItem('access_token');
        // let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvhXC8xMjcuMC4wLjE6ODAwMVwvYXBpXC91c2VyXC9sb2dpbiIsImlhdCI6MTU3ODA0MjU3MywiZXhwIjoxNTc4MDQ2MTczLCJuYmYiOjE1NzgwNDI1NzMsImp0aSI6Im5YYUw5V25hNnFxcHV0TG0iLCJzdWIiOjEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.v4G7zJfEBTO-Fw0iWyq1_eW3UPwbNv6PaK5c6LPIiDs';
        let config = {
            headers: {'Authorization': "bearer " + token}
        };
        axios.get( 
            '/api/is-token-valid',
            config
        ).then(response =>{
            let{success , message} = response.data;
        }).catch(error =>{

        });
    }
    login =()=>{
        axios.post('/api/user/login',{
            email : $('#email').val(),
            password : $('#password').val()
        })      
        .then(response =>{  
            let{success , message , token} = response.data;
            localStorage.setItem('access_token',token);
            window.location.replace("/");
        }).catch(error =>{
            // console.log(error);
        })
    };
    
    render(){      
        return(
            <div>
                <input id="email" placeholder="email" />
                <input id="password" placeholder="password" />
                <input onClick ={()=>{this.login()}} type="button" value="login" />
            </div>
        )
    }
}

export default Login;
