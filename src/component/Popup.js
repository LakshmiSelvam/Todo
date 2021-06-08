import React, { useState } from 'react';

const Popup = props =>{

    const [val,setVal]=useState(props.edit.text)

  const HandleChange = e =>{
      setVal(e.target.value);
  }
  const HandleSubmit = e =>{
      e.preventDefault();
      props.update(val);
  }

    return (
        <div>
          <div className="update">
            <h1>Update</h1>
             <form onSubmit={HandleSubmit}> 
                 <input type="text"  value={val} onChange={HandleChange} className="task-input" />
                     {/* <input type="submit " value= "Update" /> */}
                     { <button type="submit" value="update" className="button-update">update</button> }
             </form>
            </div>
        </div>
    )
}
export default Popup;