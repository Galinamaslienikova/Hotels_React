import React, { useState } from "react"
import { useEffect } from "react"
import { getRoomsInHotel } from "./api"
import ImageSlider from "./ImageSlider"

 
export default function OneRoomInList({id,adults,children,cols}){
    const[room,setRoom]=useState([])
     useEffect(()=>{
         getRoomsInHotel(id)
         .then(data=>{
             if(adults||children){
                 let arr=data.rooms.filter((item)=>{
                     return (item.occupancy.maxAdults>=adults&&item.occupancy.maxChildren>=children)
                 })
               setRoom(arr)
             }else{
                 setRoom(data.rooms)
             }
           }
         )
     },[adults,children,id])
    
      let text =function(item,a){
         return(
             <div className='roomInList' key={item.id}>
                 <div>
                     <h3>{item.name}</h3>
                     <p>Max-Adults:{item.occupancy.maxAdults}</p>
                     <p>Max-Children:{item.occupancy.maxChildren}</p>
                     {a?<><p>BedConfiguration:{item.bedConfiguration}</p><p>MaxOverall:{item.occupancy.maxOverall}</p></>:''}
                 </div>
                 <div className="description">
                     {a?<h3>Description:</h3>:''}
                     {item.longDescription}
                 </div>
                 {a?<div className='imageInRoom'>{item.images.length>0?<ImageSlider imgArr={item.images}/>:<p>There are no images</p>}</div>:''}
         </div>
         )
         }
     
     let result=room.map((item,index)=>{
         if (cols){
            if(index<cols){
            return <div key={item.id}>
                        {text(item)}
                    </div> }else return ''
         }else 
         return  <div key={item.id}>
                    {text(item,1)}
                </div>  
               
        })
     return(
         <>

           {room.length===0?<p>No rooms for your searching</p>:result } 
         </>
     )
     
 }
 
 
