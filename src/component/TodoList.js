import React, { useEffect, useState } from 'react';
import AddTask from './AddTask';
import Todo from './Todo';
const TodoList = () =>{
    const [todos,setTodo]= useState([]);
 
    const isComplete= index =>{
        const UpdateList = [...todos];
        UpdateList[index].isComplete=!UpdateList[index].isComplete;
        localStorage.setItem("taskList",JSON.stringify(UpdateList))
        setTodo(UpdateList);
    }

    const remove = index =>{
         const Filterarr = [...todos];
         Filterarr.splice(index,1);
         localStorage.setItem("taskList",JSON.stringify(Filterarr))
         setTodo(Filterarr);
    }
    const edit = (index,val) =>{
       const updatelist = [...todos];
       updatelist[index].text= val;
       localStorage.setItem("taskList",JSON.stringify(updatelist))
       setTodo(updatelist);
    }


 useEffect (()=>{
     let arr = localStorage.getItem("taskList");
     if(arr){
         let obj = JSON.parse(arr);
         setTodo(obj)
     }
 },[])


    const AddTodo = todo =>{
      if(!todo.text){
          return ;
      }
      const newTodo = [...todos,todo];
      console.log(newTodo);
      localStorage.setItem("taskList",JSON.stringify(newTodo))
      setTodo(newTodo);
    }
    return (
        <div >
            <h1 className="title">TODO</h1>
            <AddTask  submit= {AddTodo}/>
            <Todo todo={todos} isComplete={isComplete} remove={remove} edit={edit}/>
            
        </div>
    )
}
export default TodoList;