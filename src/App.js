import React from 'react';
import './App.css';
import './component/AddTask'
import TodoList from './component/TodoList';
function App() {
  return (
    <div className="container" >
     <div  className="app-wrapper">
       <div>
     <TodoList />
     </div>
     </div>
 </div>
  );
}

export default App;
