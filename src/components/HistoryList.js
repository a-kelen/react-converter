import React from 'react'
import HistoryItem from './HistoryItem'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

export default function HistoryList(props) {
    const wrapper = React.createRef();
    const list = props.items.map((item, i) => (
        <CSSTransition
            key={item.id}
            classNames="item"
            timeout={{ enter: 500, exit: 300 }}
        >
            <HistoryItem  item={item} />
         </CSSTransition>
    ));
        
    function clear() {
        props.clear()
    }
    return(
        <div>
            <div className="item-box">
            <div className="title">History</div>
            <button className="btn glass" onClick={clear}>Clear</button>
            </div>
            <div className="list-box">
            <TransitionGroup ref={wrapper}>
                {list}
            </TransitionGroup>
            </div>
        </div>
    )
}
