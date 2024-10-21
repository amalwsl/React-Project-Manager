import NewTask from "./NewTask";

export default function Tasks({handleSaveTask,tasksList,handleDeleteTask}) {
    return(
        <section>
            <h2 className="text-2xl font-bold text-stone-600 mb-4" > Tasks </h2>
            <NewTask handleSaveTask={handleSaveTask} />
            {tasksList.length==0&& <p className="text-stone-800 my-4 " >this project doesn't have any tasks yet !! </p>}
            { tasksList.length>0&& <ul className="p-4 mt-8 rounded-md bg-stone-100 " >
                {tasksList.map((task,index)=> 
                <li key={index} className="flex justify-between my-4 " > 
                    <span> {task.text} </span> .
                    <button className="text-stone-700 hover:text-red-500 " onClick={()=> handleDeleteTask(task.id)} >Clear</button>
                </li> )}
            </ul  >}
        </section>
    )
}