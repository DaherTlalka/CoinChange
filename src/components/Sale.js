import React from 'react';
import './Style.css';
import { useState,useEffect} from "react"


export function Sale(){
    const [value,setValue]=useState(1);
    const [select,SetSelect]=useState('usd');
    const [result,SetResult]=useState();
   function mul(){
       fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/ils.json',
       {method:'GET'}).then(res=>res.json().then(data=>{
           const ils=data.ils;
           for(var k in ils) {
               if(select===k){
                   SetResult(value/ils[k]*0.99);
               } 
           }
       }));
   }
   useEffect(()=>{mul()},[value,select])
   return ( 
      <div className='Buy'>
         <h1 className='titel'>Sale</h1>
            <form>
               <select className= 'button' name='select' onChange={(val)=>SetSelect(val.target.value)} >
                   <option className='select'>usd</option>
                   <option className='select'>eur</option>
               </select>
               <br></br>
               
            <input type='number' className='input' placeholder='chaneValue' value={value} onChange={val=>setValue(val.target.value)}  ></input>
               <br></br>
               <h3 className='result'>{Number(result).toFixed(2)}</h3>
            </form>
      </div>
      
   )
}