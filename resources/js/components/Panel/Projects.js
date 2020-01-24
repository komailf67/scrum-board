import React , {Component} from "react";
import ProjectCard from "../Partials/Project/ProjectCard";
import AddNewProject from "../Partials/Project/AddNewProject";
import { connect } from "react-redux";
import { userIdContainer } from "../../actions";
import { projectContainer } from "../../actions";
import $ from "jquery";
import { project } from "../../reducers/project";

class Projects extends Component{
    
    state = {
        projects : [],
    }

    componentDidMount = () =>{
        let token = localStorage.getItem('access_token');
        console.log(token);
        let config = {
            headers: {'Authorization': "bearer " + token}
        };
        axios.get( 
            '/api/projects',
            config
        ).then(response =>{
            let {projects , userId } = response.data;
            this.props.dispatch(userIdContainer(userId));
            this.props.dispatch(projectContainer(projects));
            console.log(projects);
            this.setState({
                projects : projects
            })
        }).catch(error =>{

        });
    }
    render(){
        
        let projects = this.props.projects;
        console.log(projects);
        let aProjects = [];
        if (projects) {
            aProjects = $.map(projects , function(value , index){
                return [<ProjectCard key={index} project={value} />];
            });
        }
        return(
            <div className="card-container">
                {aProjects}
                <AddNewProject />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    // console.log(state);
    return{
        projects : state.project.projects
    }
}
export default connect(mapStateToProps)(Projects);