import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const Cart = () => {
  let data = JSON.parse(localStorage.getItem("cartitem"));

   const [totalAmount,setTotalAmount] = useState(0)
 useEffect(()=>{
  // let x = 0;
  //  data.map((el)=>
  //  {
  // //  totalAmount = el.price + x
  // //  x = el.price
  // setTotalAmount(totalAmount)
  //let x;
 
   let x = data.reduce((acc,el)=>{
    return acc+el.price;
   },0)
   setTotalAmount(x)
//  })
 },[]);
 console.log(totalAmount)
  return (
    <div>
      <p>Total Amount:{totalAmount}</p>
      {data?.map((el)=>
        <div key={el.id}>
          <h2>{el.title}</h2>
          <p>{el.price}</p>
        </div>
      )}
    </div>
  )
}

export default Cart
