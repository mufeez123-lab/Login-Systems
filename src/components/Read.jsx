import React, { useEffect } from 'react'
import { useState } from 'react';
const Read = () => {

  const [data, setData] = useState();
  const [error,setError]=useState("");



  async function getData(){
    const response=await fetch("http://localhost:8000");

    const result= await response.json();

    if(!response.ok){
      console.log(result.error)
      setError(result.message)
    }
    if(response.ok){
      
    setData(result)
    }
  }


  useEffect(() => {
    getData();


    
  }, [])
  console.log(data);
  

  return (
    <div className='container my-cont'>
      <h2 className='text-center'>All data</h2>
      <div className='row'>
        {data?.map((ele)=>(
           <div key={ele._id} className='column'>

           <div className="card" >
           <div className="card-body">
       <h5 className="card-title">{ele.name}</h5>
       <h5 className="card-title">{ele.email}</h5>
       <p className="card-number">{ele.age}</p>
       <a href="#" className="card-link">Delete</a>
       <a href="#" className="card-link">Edit</a>
     </div>
   </div>
   
           </div>
        ))}

       
      </div>
    </div>
  )
}

export default Read