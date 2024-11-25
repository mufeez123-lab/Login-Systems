import React, { useState } from 'react'

const Create = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error,setError]=useState("");
    const [success, setSuccess] = useState(false); // State to manage successful login

  console.log(name,email,password);

  const handleSubmit=async (e)=>{
    
    e.preventDefault();

    const addUser={name,email,password} 
     
    //fetching backend host to frontend//
    const response=await fetch("http://localhost:8000",{
      method:"POST",
      body:JSON.stringify(addUser),
      headers:{
        "Content-Type":"application/json",
      }
    })

    const result =await response.json();

    if(!response.ok){
      console.log(result.error)
      setError(result.message)
    }
    if(response.ok){
      console.log(result)
      setError("");
      setSuccess(true); // Set success state
      setName("");
      setEmail("");
      setPassword("");
    }
  }
  
  return (
    <div className="container my-cont">
      {error && <div class="alert alert-danger" >{error}</div>}
      <h2 className="text-center">Enter the data</h2>
      {success && <div className="alert alert-success">Registration successful <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" id="Check-Square--Streamline-Core" height={14} width={14} ><desc>{"Check Square Streamline Icon: https://streamlinehq.com"}</desc><g id="check-square--check-form-validation-checkmark-success-add-addition-box-square-tick"><path id="Rectangle 711" fill="#8fbffa" d="M3.5 0h7S14 0 14 3.5v7s0 3.5 -3.5 3.5h-7S0 14 0 10.5v-7S0 0 3.5 0" strokeWidth={1} /><path id="Vector (Stroke)" fill="#2859c5" fillRule="evenodd" d="M10.386 4.164a0.75 0.75 0 0 1 0.117 1.055l-4 5a0.75 0.75 0 0 1 -1.036 0.131l-2 -1.5a0.75 0.75 0 1 1 0.9 -1.2l1.419 1.064L9.33 4.282a0.75 0.75 0 0 1 1.055 -0.118Z" clipRule="evenodd" strokeWidth={1} /></g></svg></div>}
      
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
    <label  className="form-label">Name</label>
    <input type="text"
     className="form-control"
     value={name} 
     onChange={(e)=>setName(e.target.value)}/>

      </div>

  <div className="mb-3">
    <label  className="form-label">Email address</label>
    <input type="email" className="form-control"  value={email} 
     onChange={(e)=>setEmail(e.target.value)}/>
      </div>

  <div className="mb-3">
    <label  className="form-label">Password</label>
    <input type="password" className="form-control"  value={password} 
     onChange={(e)=>setPassword(e.target.value)}/>
      </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

    </div>
  )
}

export default Create