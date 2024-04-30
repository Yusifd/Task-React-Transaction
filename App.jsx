import { useState,useEffect } from 'react'

import './App.css'

function App() {
  const [arr, setArray] = useState([])
  useEffect(()=>{
    fetch('https://acb-api.algoritmika.org/api/transaction ')
    .then((res)=>res.json())
    .then((data)=>{setArray(data)})      
  },[])

  return (
    <>
    <div>{
      arr.map((item)=>{
        return(
          <p>From: {item.from} To: {item.to} amount: {item.amount}</p>
        )
      })      
      }    
    </div>   
    </>
  )
}

export default App
