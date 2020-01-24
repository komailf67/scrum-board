import React, { Component } from 'react';
import { connect } from "react-redux";
import Login from './Auth/Login';
import  PrivateRoute from "./Auth/PrivateRoute";
import Home from './Home';
import { isTokenValid } from ".././actions";
import Loading from "./Partials/Loading";
import { LOADING , USER_LOGGED_IN , USER_DID_NOT_LOG_IN } from "../Consts";

class Application extends Component {
    state = {
        isUserLoggedIn : LOADING
    }
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
            if(success){
                this.props.dispatch(isTokenValid(token));
                this.setState({
                    isUserLoggedIn : USER_LOGGED_IN
                })
            }else{
                this.setState({
                    isUserLoggedIn : USER_DID_NOT_LOG_IN
                })
            }
        }).catch(error =>{
            this.setState({
                isUserLoggedIn : USER_DID_NOT_LOG_IN
            })
        });
    }
    render() {
        let component ;
        switch (this.state.isUserLoggedIn) {
            case LOADING:
                component = <Loading />;
                break;
            case USER_LOGGED_IN:
                component = <Home />;
                break;
            case USER_DID_NOT_LOG_IN:
                component = <Login />;
            default:
                break;
        }
        return (
            <div id="application">
                {component}
                    <div>                    
                    {/* <Switch>
                        <PrivateRoute authed={this.state.isUserLoggedIn} path='/' component={Home} />
                    </Switch> */}
                    </div>
            </div>
        );
    }
}

const mapStateToProps = ( state ) => {
    return {
        isUserLoggedIn : state.auth.isUserLoggedIn
    }
}
export default connect(mapStateToProps)(Application);