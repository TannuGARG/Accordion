import React, { useState } from "react"
import "./style.css" ;
// tamanna garg
export default function MyAccordion({question,answer}){
    const [hover,setHover]=useState(false)
    const showContent=()=>{
        setHover(!hover)
        if (hover){

        }

        alert()
    }
   // tamanna garg
    return(
        <>
        
         <div className="main1">
            <p onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} className="ques">{question}</p>
        </div>
        {hover? <p className="ans">{answer}</p>:<p></p>}
        
        
    </>
    )
    
}