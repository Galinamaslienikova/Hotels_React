import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ImageSlider from "./ImageSlider";
import { Modal } from "./Modal";
import OneRoomInList from "./OneRoomInList";
import { Stars } from "./Stars";

export default function OneHotelinList({adults,children,cols,email,telephone,country,town,description,stars,images,name,adress1,adress2,id}){
    const[ad,setAd]=useState(0)
    const[modal,setModal]=useState(false)
    useEffect(()=>{
        setAd(adults)
    },[adults,children,stars])

   let showModal=function (){
       setModal(true)
   }
   let closeModal=function(){
       setModal(false)
   }
    return(
        <div style={{position:"relative"}}>
            <Modal close={closeModal} modal={modal}>
                <ImageSlider imgArr={images} />
             </Modal>   
        <div className='hotelList'>
          
            <div className='hotelName'>
                <div className='hotelImage'>
                    <ImageSlider modal={modal} onclick={showModal} imgArr={images} />
                </div>
               <div>
               <div className='hotelHeader'>
                   {email?<h1>{name}</h1> :<Link to={`hotel/${id}`}> <h1>{name}</h1></Link>}
                    <p>Adress1:{adress1}</p>
                    <p>Adress2:{adress2===''?'no adress':adress2}</p>
                    </div>
                    <Stars cheking={stars}/>                    
                </div>
            </div>
            <div className={email?'show':'notShow'}>
                        <p><span>Description:</span>{description} </p>
                        <p><span>Town:</span>{town}</p>
                        <p><span>Country:</span>{country}</p>
                        <p><span>Telephone:</span>{telephone}</p>
                        <p><span>Email:</span>{email}</p>
                    </div>
            <div className=' borderHot' >
                <OneRoomInList adults={ad} children={children} cols={cols} id={id}/>
            </div>

        </div>
        </div>
    )
}