import { useEffect, useState } from "react"

export default function ImageSlider({imgArr,onclick,num}){
    const[i,setI]=useState(0)
    useEffect(()=>{
        setI(0)
    },[])
    function next (){
        if(i>imgArr.length-2){
            setI(0)
        }else setI(i+1)
        
    }
    function prev (){
        if(i===0){
            setI(imgArr.length-1)
        }else  setI(i-1)
       
    }
   
    return(
        <>
        <button disabled={imgArr.length>1?false:true} onClick={prev}>Prev</button>
        <img data-num={num} onClick={onclick}  alt='img' src={imgArr[i].url}/>
        <button disabled={imgArr.length>1?false:true}  onClick={next}>Next</button>
        </>
    )
}