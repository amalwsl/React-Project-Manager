import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SideBar from "./components/SideBar";
import SelectedProject from "./components/SelectedProject";

function App() {

  const [projectState,setProjectsState]=useState({
    selectedProjectId:undefined, 
    projects:[],
    tasks:[],
  })

  function handleStartAddProject() {
    setProjectsState(prevState=>{
      return{...prevState,selectedProjectId:null}
    })
  }

  function handleAddProject (projectData) {

    const newProject={
      ...projectData,
      id:Math.random()
    }

    setProjectsState(prevState=>{
      return{...prevState,
        selectedProjectId:undefined,
        projects:[...prevState.projects,newProject]
      }
    })
  }

  function handleCancelButton() {
    setProjectsState(prevState=>{
      return{...prevState,
        selectedProjectId:undefined,
       
      }
    })
  }


  function handleSelectProject(projectId) {
    setProjectsState(prevState=>{
      return{...prevState,
        selectedProjectId:projectId,
       
      }
    })
  }

  function handleSaveTask(task) {

    const newTask={
      text:task,
      id:Math.random(),
      projectId:projectState.selectedProjectId
    }

    setProjectsState(prevState=>{

      return{...prevState,
        tasks: [ ...prevState.tasks, newTask],
       
      }

      
    })
  }


  function handleDeleteTask(taskID) {

    setProjectsState(prevState=>{
      return{...prevState,
        tasks: [ ...prevState.tasks.filter((t)=>t.id!==taskID)],
      }

    })
  }



  function handleDeleteProject() {

    const updatedProjects=[...projectState.projects.filter((p)=>p.id!=projectState.selectedProjectId)]


    setProjectsState(prevState=>{
      return{...prevState,
        selectedProjectId:undefined,
        projects:updatedProjects,
       
      }
    })
  }




  let content
  // undefined means not adding not selecting , null means we're not selecting but we're adding a new project
  if(projectState.selectedProjectId===null){
    content=<NewProject handleAddProject={handleAddProject} handleCancelButton={handleCancelButton} />
  }else if (projectState.selectedProjectId===undefined){
    content= <NoProjectSelected handleStartAddProject={handleStartAddProject} />
  }else {
    const selectedProject=projectState.projects.find((p)=>p.id===projectState.selectedProjectId)
    const tasksList=projectState.tasks.filter((task)=>task.projectId==selectedProject.id)
    content=<SelectedProject project={selectedProject} handleDeleteProject={handleDeleteProject} handleSaveTask={handleSaveTask} handleDeleteTask={handleDeleteTask} tasksList={tasksList} />
  }


  console.log("projects are => ",projectState)




  return (
    <main className="h-screen my-8 flex gap-8 " >
     <SideBar handleStartAddProject={handleStartAddProject} projectState={projectState} handleSelectProject={handleSelectProject}  />
     {content}
    </main>
  );
}

export default App;
