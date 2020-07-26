import React from 'react';

interface ToDoFormProps{
    onAdd(title:string):void
}

export const  InputForm:React.FC<ToDoFormProps>=({onAdd})=> {
   const [form,setForm]=React.useState<string>('')
   
   const changeHeandler=(event:React.ChangeEvent<HTMLInputElement>)=>{
    setForm(event.target.value)
   }
   
   
   const enterHeandler=(event:React.KeyboardEvent)=>{
       if(event.key==='Enter'){
           if(!!form.length){
              onAdd(form)
              setForm('')  
           }
            
       }
        
        
       
   }
    return (
        <div className="mui-form--inline ">
            <div className="mui-textfield mui-textfield--float-label">
                <input 
                type="text" 
                onChange={changeHeandler}
                value={form}
                onKeyPress={enterHeandler}
                />
                <label>what needs to be done</label>
            </div>
        </div>
    )
}

