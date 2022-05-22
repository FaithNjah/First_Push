
import React from 'react'

import { useState, useMemo } from 'react'

export default function Learn()  {
  const [numb, setNumb] = useState(0)
  const [dark, setDark]= useState(false)
  const doubleNum = useMemo(()=>{
    return slowDown(numb)
  }, [numb])

  const themeStyles = {
    backgroundColor: dark? 'black':'white',
    color:dark? 'white': 'black'
  }
  return (
    <div>
      <input type = 'number' value = {numb} onChange = {e => setNumb(parseInt
        (e.target.value))}/>
        <button onClick = {()=> setDark(previousDark => !previousDark)}>change themeStyles</button>
        <div style = {themeStyles}>{doubleNum}</div>
    </div>
  )
}

function slowDown(num){
  for(let i = 0; i<=1000000000000; i++){
    return num*2
  }
}









