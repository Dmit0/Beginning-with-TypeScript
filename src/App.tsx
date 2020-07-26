import React from 'react';
import {InputForm} from './components/inputForm'
import {Todo} from './components/todo'

interface ToDo{
  title:string,
  completed:boolean,
  id:number
}

const App:React.FC = () =>{
const [toDo,SetToDo]=React.useState<ToDo[]>([])

const addItems=(form:string)=>{
  const newToDo:ToDo={
    title:form,
    completed:false,
    id:Date.now()
  }
  SetToDo([newToDo,...toDo])
}

React.useEffect(()=>{
  localStorage.setItem('todos',JSON.stringify(toDo))
  
  },[toDo])

React.useEffect(()=>{
const items=JSON.parse(localStorage.getItem('todos') || '[]') as ToDo[]
SetToDo(items)
},[])

const toggleHeandler=(id:number)=>{ 
 
  let mas = toDo.map(item=>{
    if(item.id===id){
      item.completed=!item.completed
    }
    return item
  })

  SetToDo(mas)
}
const deleteHeandler=(id:number)=>{
  let mas = toDo.filter(item=>item.id!==id)
   SetToDo(mas)
}
  return (
    <div className="application">
      <span className="content">To Do App</span>
      <div className="application--main">
        <InputForm onAdd={addItems}/>
        {toDo.length 
        ? <div className="app--lists"><Todo todos={toDo} onToggle={toggleHeandler} onDelete={deleteHeandler}/></div>
        :null
        } 
        
      </div>
     
      
    </div>
  );
}

export default App;
