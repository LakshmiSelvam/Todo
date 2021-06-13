import React, { useState } from 'react';
import './AddTask.css';
const AddTask = props =>{
    const [Input,setInput] = useState('');
    const HandleSubmit = e =>{
        e.preventDefault();
        props.submit({
            text:Input,
            isComplete:false
        });
        
        setInput('');

    }
    const HandleChange = e => {
     setInput(e.target.value)
        }
 return (
     <center>
      <div className="form">
          <form onSubmit={HandleSubmit}> 
              <input type="text" className="task-input"  onChange={HandleChange} value={Input}/>
                  <input type="submit" value="Add" className="button-add"/>
          </form>
      </div>
     </center>
 ) 

}
export default AddTask;