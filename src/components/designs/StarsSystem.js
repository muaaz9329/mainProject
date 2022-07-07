import React from 'react'
const StarsSystem = (props)=>{
    const symbol = props.symbol
    const number = props.number
    var symbolNo;
    if(number===1 ){
        return(
            {symbol}
            )
    }
    else if(number===2){
        return(<div className='star-working'>
            {symbol}
            {symbol}
            </div>
            )
    }
    else if(number===3){
        return(<div  className='star-working'>
            {symbol}
            {symbol}
            {symbol}
            </div>
            )
    }
    else if(number===4){
        return(<div  className='star-working'>
            {symbol}
            {symbol}
            {symbol}
            {symbol}
            </div>
            )
    }
    else if(number===5){
        return(<div  className='star-working'>
            {symbol}
            {symbol}
            {symbol}
            {symbol}
            {symbol}
            </div>
            )
    }
}
export default StarsSystem;