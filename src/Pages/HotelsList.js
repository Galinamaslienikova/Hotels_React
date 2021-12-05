import React from "react";
import { getHotelsList } from "../Components/api";
import { Header } from "../Components/Header";
import OneHotelinList from "../Components/OneHotelinList";
import { Search } from "../Components/Search";
import  '../Styles/HotelsList.css'
export class HotelsList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            list:[],
            adults:0,
            children:0,
            stars:0

        }
    }
    componentDidMount(){ 
        getHotelsList()
        .then(data=>{
            this.setState({list:data})
        })
    }
    
    plusMinus=(e)=>{
        if(e.target.value==='+'){
            this.setState({
            [e.target.name]:this.state[e.target.name]*1+1
             })
        }else this.setState({
            [e.target.name]:this.state[e.target.name]*1-1
         })
    }
    starsCheked=(e)=>{
       this.setState({
           stars:e.target.dataset.numb
       })
    }
   
   
    render(){
        let result=this.state.list.map(item=>{
            if(item.starRating>=this.state.stars){
                return <OneHotelinList children={this.state.children} adults={this.state.adults} cols={3} stars={item.starRating} images={item.images} key={item.id} name={item.name} adress1={item.address1} adress2={item.address2} id={item.id} />
            }else return ''
            
        })
        return(
            <div>
                <Header/>
                <div className='container'>
                <Search cheking={this.state.stars} change={this.starsCheked}  main={true} children={this.state.children} adults={this.state.adults} plusMinus={this.plusMinus} />
                    {result}
                </div>
            </div>
        )
    }
}