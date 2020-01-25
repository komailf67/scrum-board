export const project = (state =[] , action ) => {
    // console.log('dfdfdffgfgf');
    switch (action.type) {
        case 'PROJECT_CONTAINER' :
            return {
                    ...state , 
                    projects : action.project
                }
        case 'ADD_NEW_PROJECT' :
            let newProjectIndex = Object.keys(state.projects).length;
            return {
                    projects: {
                        ...state.projects,
                        [newProjectIndex] : action.newProject
                    }
                }
        default :
            return state;
    }
}