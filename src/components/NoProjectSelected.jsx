import NoProjectImg from "../assets/no-projects.png"
import Button from "./Button"

export default function NoProjectSelected({handleStartAddProject}) {
    return (
        <div className="mt-24 text-center w-2/3  " >
            <img src={NoProjectImg} className="w-16 h-16 object-contain mx-auto" />
            <h2 className="text-xl font-bold text-stone-500 my-4 " >No project selected</h2>
            <p className="text-stone-400 mb-4" >
                selec a project or get started with a new one 
            </p>
            <p className="mt-8" >
                <Button  onClick={handleStartAddProject}   text="Create New Project" />
            </p>
        </div>
    )
}
