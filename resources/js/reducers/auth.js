export const auth = (state =[] , action ) => {
    // console.log(action.type);
    switch (action.type) {
        case 'IS_TOKEN_VALID' :
            console.log(action);
            return {
                    token : action.token,
                    isUserLoggedIn : true
                }
        default :
            return 'default';
    }
}