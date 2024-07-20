import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';


function Signup() {

    const [formDate, setFormData] = useState({firstname:"", lastname:"", email:"", password:""});
    function changeHandler(e){
        const {name, value}= e.target;
        setFormData({
        
                ...formDate,
                [name]:value
            
        });
    }
    const handleSubmit=async (e)=>{
        e.preventDefault();
        console.log(formDate)
        try{
            const res= await fetch('http://localhost:3030/signup',{
                method:'POST',
                header:{},
                body:JSON.stringify(formDate)
            });
            const data= await res.json();
            if(res.ok){
                alert('Signup done');
                // Navigate(/login);
            }
            else if(res.status===404){
                alert(data.message);
            }
            else{
                alert("try again")
            }
        }
        catch(err){

        }
    }

  return (
    <div>
        <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="firstname">firstname</label>
            <input name="firstname" id="firstname" type="text" value={formDate.firstname} onChange={changeHandler} required/>
            <label htmlFor="lastname">lastname</label>
            <input name="lastname" id="lastname" type="text" value={formDate.lastname} onChange={changeHandler} required/>
            <label htmlFor="email">email</label>
            <input name="email" id="email" type="email" value={formDate.email} onChange={changeHandler} required/>
            <label htmlFor="password">password</label>
            <input name="password" id="password" type="password" value={formDate.password} onChange={changeHandler} required/>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Signup;