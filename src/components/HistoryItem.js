import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa'
import useCountryFlag from '../hooks/useCountryFlag';
export default function HistoryItem(props)  {
    const item = props.item

    const [fromFlag, toFlag] = useCountryFlag(item)

    return(
        <div className="item-box glass">
            <div className="icon">
            <img src={fromFlag} alt=""></img>
            </div>
            <div>
                <div className="title-1">{item.fromInput}</div>
                <div className="title-2">{item.from}</div>
            </div>
            <i><FaAngleDoubleRight/></i>
            <div>
                <div className="title-1">{item.toInput}</div>
                <div className="title-2">{item.to}</div>
            </div>
            <div className="icon">
            <img src={toFlag} alt=""></img>
            </div>
            <div className="date">{item.created.toDateString()}</div>
        </div>            
    )}