import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { getHotelsList } from "../Components/api";
import { Header } from "../Components/Header";
import OneHotelinList from "../Components/OneHotelinList";
import { Search } from "../Components/Search";
import  '../Styles/HotelsList.css'

export function HotelsList (){
    const [list,setList]=useState([])
    const[adults,setAdults]=useState(0)
    const[children,setChildren]=useState(0)
    const[stars,setStars]=useState(0)
   
    useEffect(()=>{
        getHotelsList()
        .then(data=>{
           setList(data)
        })
    },[])
    
    const plusMinus=function(e){
        if(e.target.value==='+'){
            if(e.target.name==='children'){
                setChildren(children+1)
            }else{
                setAdults(adults+1)
            }
        }else {
           if(e.target.name==='children'){
                setChildren(children-1)
            }else{
                setAdults(adults-1)
            }
         }
    }
    const starsCheked=function (value){
       setStars(value)
    }
        let result=list.map(item=>{
            if(item.starRating>=stars){
                return <OneHotelinList children={children} adults={adults} cols={3} stars={item.starRating} images={item.images} key={item.id} name={item.name} adress1={item.address1} adress2={item.address2} id={item.id} />
            }else return ''
            
        })
        return(
            <div>
                <Header/>
                <div className='container'>
                <Search cheking={stars} change={starsCheked}  main={true} children={children} adults={adults} plusMinus={plusMinus} />
                    {result}
                </div>
            </div>
        )
    
}