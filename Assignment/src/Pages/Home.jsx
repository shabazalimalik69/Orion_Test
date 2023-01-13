import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from "axios"

const Home = () => {
  const [data,setData] = useState([]);

  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products")
    .then((res)=>{
      console.log(res.data);
      setData(res.data);
    })
  },[]);

  

  const handleAdd = (el)=>{
     let cartArr = JSON.parse(localStorage.getItem("cartitem")) || []
      cartArr.push(el);
     localStorage.setItem("cartitem",JSON.stringify(cartArr))
    console.log(el)

  }
 
  return (
    <div>
      {data?.map((el)=>
      <div key={el.id}>
        <h2>{el.title}</h2>
        <p>{el.price}</p>
        <button onClick={()=>handleAdd(el)}>Add</button>
      </div>
      )}
    </div>
  )
}

export default Home
