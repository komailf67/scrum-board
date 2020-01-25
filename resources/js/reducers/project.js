export const project = (state =[] , action ) => {
    switch (action.type) {
        case 'PROJECT_CONTAINER' :
            return {
                    ...state , 
                    projects : action.project
                }
        default :
            return state;
    }
}