export const isTokenValid = (token) =>{
    return{
        type : 'IS_TOKEN_VALID',
        token,
    }
};
export const userIdContainer = (userId) => {
    return{
        type : 'USER_ID_CONTAINER',
        userId
    }
};
export const projectContainer = (project) => {
    // console.log(project);
    return {
        type : 'PROJECT_CONTAINER',
        project
    }
}
// export const addNewProject = (projectName , userId) => {
//     return{
//         type : 'ADD_NEW_PROJECT',
//         projectName,
//         userId
//     }
// };