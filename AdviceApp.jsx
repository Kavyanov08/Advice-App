import React, { useEffect, useState } from 'react'

export const AdviceApp = () => {
    const[advice,setAdvice]=useState("Please Click Button to Get Advice")
    const[count,setCount]=useState(0)

    async function getAdvice() {
        const res=await fetch('https://api.adviceslip.com/advice')
        const data=await res.json()
        setAdvice(data.slip.advice)
        setCount((n)=>n+1)
    }
    useEffect(()=>{
        getAdvice()
    },[])
  return (
    <div>
        <h1>Advice Ally..</h1>
        <h3>{advice}</h3>
        <button onClick={getAdvice}>Get Advice</button>
        <Count count={count}/>
    </div>
  )
}
function Count(props){
    return(
        <p>You have read <b>{props.count} </b> pieces of Advises</p>
    )
}
