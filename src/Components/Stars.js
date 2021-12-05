
import '../Styles/Stars.css'
export function Stars({cheking,change}){

    return(
        <div className="starsHotel">
            <div data-numb={1} onClick={change} className={cheking>0?'cheked clip-star':'nocheked clip-star'}></div>
            <div data-numb={2} onClick={change} className={cheking>1?'cheked clip-star':'nocheked clip-star'}></div>
            <div data-numb={3} onClick={change} className={cheking>2?'cheked clip-star':'nocheked clip-star'}></div>
            <div data-numb={4} onClick={change} className={cheking>3?'cheked clip-star':'nocheked clip-star'}></div>
            <div data-numb={5} onClick={change} className={cheking>4?'cheked clip-star':'nocheked clip-star'}></div>
        </div>
        
        
    )  
}