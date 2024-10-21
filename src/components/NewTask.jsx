import { useState } from "react"

export default function NewTask({handleSaveTask}) {

    const [task,setTask]=useState("")

    function handleClick() {
        if(task.trim()=="")return
        handleSaveTask(task)
        setTask("")
    }

    return(
        <div className="flex items-center gap-4 " >
            <input className="w-64 px-2 py-1 focus:outline-none rounded-sm bg-stone-200 " value={task} onChange={(e)=>setTask(e.target.value)}   type="text" />
            <button className="text-stone-700 hover:text-stone-950 " onClick={handleClick} >Add Task</button>
        </div>
    )
}