import { useState } from "react"

export default function Counter(){

    let [count,setcount]=useState(0);

    function handleIncrement(){
        setcount(count+1); 
        console.log("plus has been clicked")
    }

    function handleDecrement(){
        if(count == 0){
            return 
        }
        setcount(count- 1); 
        console.log("Minus has been Clicked")
    }
    return(
        <div>
            <h1>Count : {count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    
    )
}