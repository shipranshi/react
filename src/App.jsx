import { useState } from 'react'
import { useCallback } from 'react';
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setnumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()*+,-./:;<=>?"

    for(let i =1; i<= Array.length(); i++) {

  }, [length, numAllowed, charAllowed]);

  return (
    <>
     
      <h1 className='text-4xl text-center text-white' >Password generator</h1>


    </>
  )
}

export default App
