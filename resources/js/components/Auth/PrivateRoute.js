import React from 'react';
import {Redirect, Route, withRouter} from 'react-router-dom';
function PrivateRoute ({component: Component, authed, ...rest}) {
    return (  
        <Route
        {...rest}
        // console.log(props);
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}
export default PrivateRoute;