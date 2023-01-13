import axios from 'axios';
import React from 'react'
import { useState } from 'react'

const Signup = () => {
    const [email,setEmail] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:8080/signup",{email})
        .then((res)=>{
            console.log(res);
        })
    }

  return (
    <div>
        <form onSubmit={handleSubmit} action="">
        <input placeholder='Enter email' type="text" onChange={(e)=>setEmail(e.target.value)} /> <br />
        <input type="Submit" />
        </form>
    </div>
  )
}

export default Signup
