import React, { useState,memo } from "react";
 
function ChildA({todo,handelTodo}) {
   console.log("child component ")
    
    return (
        <div className="App">
       
        </div>
    );
}
 
 
export default memo(ChildA);