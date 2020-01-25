export const auth = (state =[] , action ) => {
    // console.log(action.type);
    switch (action.type) {
        case 'IS_TOKEN_VALID' :
            // console.log(action);
            return {
                    ...state,
                    token : action.token,
                    isUserLoggedIn : true
                }
            case 'USER_ID_CONTAINER' :
                return {
                        ...state,
                        userId : action.userId
                    }
        default :
            return state;
    }
}