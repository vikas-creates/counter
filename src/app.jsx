import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'

export function App() {

let [counter, setCounter]=useState(0)

//let counter = 4

const addvalue =()=>{
  //console.log("clicked", counter)
  // counter = counter + 1
  // setCounter(counter)
  //if(counter<20){
    // counter = counter + 1
    // counter = counter + 1
    // counter = counter + 1
    // counter = counter + 1
  setCounter(prevCounter => prevCounter + 1)
  setCounter(prevCounter => prevCounter + 1)
  setCounter(prevCounter => prevCounter + 1)
  setCounter(prevCounter => prevCounter + 1)


 // }
}

const removeValue = ()=>{
  if(counter>0){
  setCounter(counter - 1)
  } 
}
  return (
    <>
    <h1>First project using react</h1>
    <h2>Counter Number</h2>
    <h3>Number :{counter}</h3>
    <button 
    onClick={addvalue}
    >Increase</button>

    <button 
    onClick={removeValue}>decrease</button>
    <footer>{counter}</footer>


    </>
  )
}
