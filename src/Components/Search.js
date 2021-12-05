import { Stars } from "./Stars"

export function Search({nochange,change,main,adults,plusMinus,cheking,children}){


    return(
        <div className="search">
       <div className='starsHover lineHeighth'> {main?<Stars  nochange={nochange} change={change} cheking={cheking}/>:''}</div>
        <p className='lineHeighth'>Adults <input disabled={adults===0?true:false}  type='button'  value='-'  name='adults'   onClick={plusMinus}/>{" "+adults+' '}<input name='adults'  value='+' type='button' onClick={plusMinus}/> </p>
        <p className='lineHeighth'>Children <input disabled={children===0?true:false} name='children'  value='-' type='button' onClick={plusMinus}/> {' '+children+' '}<input name='children' value='+' type='button' onClick={plusMinus}/> </p>
    </div>
    )
}
