import React, { useState } from 'react';
import './Todo.css';
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Popup from './Popup';

toast.configure();

const Todo = props =>{
   const [edit,setEdit]=useState({
       index:null,
       text:''
});

const update = val=>{
    props.edit(edit.index,val);
    setEdit({
        index:null,
        text:''
    })
}

const HandleClick = () =>{
    return;
}


const list = props.todo.map((currentEle,index)=>{
 

    return <div className="todo">
             <li className="list-item">
                 {/* <span onClick={currentEle.isComplete?()=>props.remove(index):{HandleClick}}
                 className={currentEle.isComplete?'cross':'do'}
                 > */}
                     
                     {/* {currentEle.isComplete?'X':'->'} */}
                 {/* </span> */}
                 
                 <span onClick={()=>props.isComplete(index)} className={currentEle.isComplete?'Completed list':'duetask list'}>
                     {currentEle.text}</span>
                 
                     <button onClick={() => setEdit({
                     index:index,
                     text:currentEle.text
                 })} disabled={currentEle.isComplete?true:false} className="button-edit "><i class="fa fa-edit"></i></button>
                 
  
                 
                 <button onClick={currentEle.isComplete?()=>props.remove(index):{HandleClick}} 
                  className={"button-delete "}
                 ><i class="fa fa-trash-o"></i></button>
                 {/* <div><button onClick={currentEle.isComplete?()=>props.remove(index):{HandleClick}}>Complete</button></div> */}
             </li>
         </div>
    })


    return (
    <div>
  
           <div className="List">
              <ol className="ol">
                {list}
             </ol>
                </div>
        
          {
              edit.text?(
              <Popup edit={edit} update={update}/>
              ):null
          }
        </div>
    )
}
export default Todo;
