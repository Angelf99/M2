import React from 'react';
export function validate(input){
  let error={}
  if(!input.username){
    error.username='Username is required'

  }else if (!/\S+@\S+\.\S+/.test(input.username)){
    error.username='Username is invalid'
  }
  if(!input.pasword){
    error.pasword='Pasword is required'

  }else if (!/(?=.-*[0-9])/.test(input.pasword)){
    error.pasword='Pasword is invalid'
  }
  return error;
  
}
export default function  Form() {
  let [input,setInput]= React.useState({
    username:'',
    pasword:''})
  
  let[error,setError]= React.useState({})  

  let handleInputChange=(e)=>{
      // [e.target.name]
      setInput(prev=>({
        ...prev, [e.target.name]:e.target.value
      }))
      let objError= validate({...input,[e.target.name]:e.target.value})
      setError(objError)
    }

  return (
    <form>
      <div>
        <label>
          Username:
        </label>
        <input type='text' value={input.username} onChange={handleInputChange} name={'username'} className={error.username && 'danger'}/>
      </div>
       <div> 
        <label>
          Pasword
        </label>
        <input type='pasword' value={input.pasword} onChange={handleInputChange} name={'pasword'} className={error.pasword && 'danger'}/>
      </div>
      <input type={'submit'} value={'Ingresar'}/>
    </form>
  )
}
