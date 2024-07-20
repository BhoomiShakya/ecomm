import React, { useState } from 'react'

function Login() {

    const [formDate, setFormData] = useState({firstname:"", lastname:"", email:"", password:""});
    function changeHandler(e){
        const {name, type, value, checked}= e.target;
        setFormData(prevFormData=> {
            return {
                ...prevFormData,
                [name]:type==='checkbox'?checked:value
            }
        });
    }
  return (
    <div>
        <h1>Login</h1>
        <form>
            <label for="firstname">firstname</label>
            <input name="firstname" id="firstname" type="text" value={formDate.firstname} onChange={changeHandler} required/>
            <label for="lastname">lastname</label>
            <input name="lastname" id="lastname" type="text" value={formDate.lastname} required/>
            <label for="email">email</label>
            <input name="email" id="email" type="text" value={formDate.email} required/>
            <label for="password">password</label>
            <input name="password" id="password" type="password" value={formDate.password} required/>
        </form>
    </div>
  )
}

export default Login