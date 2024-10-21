import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({handleAddProject,handleCancelButton}) {

    const titleRef=useRef()
    const descriptionRef=useRef()
    const dateRef=useRef()
    const modalRef=useRef()

    function handleSave() {
        const enteredTitle=titleRef.current.value
        const enteredDescription=descriptionRef.current.value
        const enteredDate=dateRef.current.value

        //validation...
        if(enteredTitle.trim()===""||enteredDescription.trim()===""||enteredDate.trim()===""){
            modalRef.current.open()
            return
        }

        handleAddProject({
            title:enteredTitle,
            description:enteredDescription,
            date:enteredDate
        })
    }
    


    return (
   <>
    <Modal ref={modalRef} btnLabel="Close" onSubmit={handleCancelButton} >
        <h2  className="text-xl font-bold text-stone-700 my-4 ">Invalid Input</h2>
        <p className="text-stone-600 mb-4">Oops.. looks like you forgot to enter a value.</p>
        <p className="text-stone-600 mb-4">Please make sure you provide a valid value for every input field.</p>
    </Modal>
    <div className="w-[35rem]  mt-16 " >
        <menu className="flex items-center justify-end gap-4 my-4 " >
            <li><button onClick={handleCancelButton}  className="text-stone-800 hover:text-stone-950 " >Cancel</button></li>
            <li><button onClick={handleSave}  className=" bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md  " >Save</button></li>
        </menu>
        <div>
           <Input ref={titleRef} label="Title" /> 
           <Input ref={descriptionRef} label="Description" richText /> 
           <Input type="date" ref={dateRef} label="Due Date" /> 

           
        </div>
    </div>
   </>
    )
}