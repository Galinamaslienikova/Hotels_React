import { useEffect, useState } from "react"
import { useLocation } from "react-router"
import { Link } from "react-router-dom"
import { getHotelsList} from "../Components/api"
import OneHotelinList from "../Components/OneHotelinList"
import { Search } from "../Components/Search"

export function ShowHotel(){
   let location=useLocation()
   let id=location.pathname.replace('/hotel/','')
   const[children,setChildren]=useState(0)
   const[adults,setAdults]=useState(0)
   const[stars,setStars]=useState(0)
   const [hotels,setHotels]=useState([])
   useEffect(()=>{
    getHotelsList()
    .then(data=>{
        let arr=data.filter((item)=>{
            return item.id===id
        })
        setHotels(arr)
    })
   },[id,children,adults,stars])
   let plusMinus=function(e){
    if(e.target.value==='+'){
       switch(e.target.name){
       case 'adults':
           setAdults(adults+1)
           break;
        case 'children':
            setChildren(children+1)
            break;
        case 'stars':
            setStars(stars+1)
            break; 
        default:return '';       
    }
    }else switch(e.target.name){
        case 'adults':
            setAdults(adults-1)
            break;
         case 'children':
             setChildren(children-1)
             break;
         case 'stars':
             setStars(stars-1)
             break;   
         default:return '';       
     }
    
   
    
}
   let result=hotels.length>0?
        <OneHotelinList 
            adults={adults}
            children={children}
            email={hotels[0].email} 
            telephone={hotels[0].telephone} 
            country={hotels[0].country} 
            town={hotels[0].town}
            description={hotels[0].description} 
            stars={hotels[0].starRating} 
            images={hotels[0].images} 
            key={hotels[0].id} 
            name={hotels[0].name} 
            adress1={hotels[0].address1} 
            adress2={hotels[0].address2} 
            id={hotels[0].id}/>:<div></div>
    return(
        <div className='container'>
            <Link to='/'><button className='orangeButton'> Back</button></Link>
            <Search  children={children} adults={adults} plusMinus={plusMinus} stars={stars}/>
            {result}
        </div>
    )
}
