import { useState } from "react"

export default function Form(){
    let[FirstName,setFirstName]=useState("");
    let[LastName,setLastName]=useState("");

    let handleChange=(e)=>{
        //  console.log(e.target.value);
         setFirstName(e.target.value)        
    }
    let LastHandleChange=(e)=>{
        setLastName(e.target.value)
    }

    let handleSubmit=(e)=>{
        e.preventDefault(); 
        console.log(FirstName,LastName);
    }
    return(
        <div>
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                <label>First Name:  </label>
                <input onChange={handleChange} type="text" value={FirstName} />
                <label>Last Name: </label>
                <input onChange={LastHandleChange} type="text" value={LastName} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}