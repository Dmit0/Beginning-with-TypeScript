import React from 'react';

interface ToDo{
    title:string,
    completed:boolean,
    id:number
  }

interface ToDoFormProps{
    todos:ToDo[],
    onToggle(id:number):void
    onDelete(id:number):void
}

export const Todo:React.FC<ToDoFormProps>=({todos,onToggle,onDelete})=> {
    return (
            <ul className="list-group">
                {todos.map(item=>
                {
                    const classes=['list-group-item']
                    if(item.completed){
                        classes.push('completed')
                    }
                    return(
                        <li key={item.id} className={classes.join(' ')}>
                            <div>
                                <input type="checkbox" className="box" checked={item.completed} onChange={()=>onToggle(item.id)}/>
                                <span>{item.title}</span>
                            </div> 
                            <span className="del_button" onClick={()=>onDelete(item.id)}>x</span>
                        </li>
                    )}     
            )}
            </ul>
    )
}


