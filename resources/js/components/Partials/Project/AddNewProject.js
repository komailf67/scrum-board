
import React, { Component } from 'react';
import Modal, { ModalHeader, ModalBody, ModalFooter } from './Modal';
import { connect } from "react-redux";
import $ from "jquery";
import { addNewProject } from "../../../actions";
import Axios from 'axios';

// import './App.css';

class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
             modal: !this.state.modal
        });
  }
  save = () => {
    
      let token = localStorage.getItem('access_token');

      let projectName = $('#project-name').val();
      if (projectName) {
        let newProjectData = {
          projectName : projectName,
          userId : this.props.userId
        }
  
        axios.post(
          '/api/projects/save-new-project',
          newProjectData ,
          {
              headers: {
                Authorization: 'Bearer '+ token
              }    
          }
        ).then(response => {
          let {newProject} = response.data;
          console.log(response);
          this.props.dispatch(addNewProject(newProject));
          this.setState({
            modal : !this.state.modal
          });
        }).catch(error => {
          console.log('There has been a problem with creating the project');
        });
      }else{
        alert('Please enter the project name')
      }
      
  }

  render() {
    return (
      
      <div className="App">

        <button
          type="button"
          className="btn btn-secondary"
          onClick={this.toggle}
        >
          Create new project
        </button>

        <Modal isOpen={this.state.modal}>
          <ModalHeader>
            <h3>Create new project</h3>
            <button
              type="button"
              className="close"
              aria-label="Close"
              onClick={this.toggle}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </ModalHeader>
          <ModalBody>
            <p>Add project name :</p>
            <input id="project-name" />
          </ModalBody>
          <ModalFooter>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={this.toggle}
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.save}
            >
              Save
            </button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
// const mapDispatchToProps = dispatch =>{
//   // console.log(dispatch);
//   return  {

//   }
// };
const mapStateToProps = (state) => {
    return {
      projects : state.project.projects,
      userId : state.auth.userId
    }
}
export default connect(mapStateToProps)(ProjectCard);