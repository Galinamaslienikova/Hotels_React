
import '../Styles/Stars.css'
export function Stars({cheking,change}){
    let starsIn=function(){
        let arr=[]
        for(let i=0;i<5;i++){
            arr.push( <div onClick={()=>change(i+1)} className={cheking>i?'cheked clip-star':'nocheked clip-star'}></div>)
        }
        return arr
    }
    return(
        <div className="starsHotel">
            {starsIn()}
        </div>
    )  
}