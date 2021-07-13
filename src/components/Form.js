import { useState , useEffect} from 'react'
import { AiOutlineSwap } from 'react-icons/ai'
import useAPI from '../hooks/useAPI'
export default function Form(props) {
    
    const [from, setFrom] = useState('USD')
    const [to, setTo] = useState('UAH')
    const [fromInput, setFromInput] = useState(0)
    const [toInput, setToInput] = useState(0)
    const [value, get] = useAPI()
    const options = [
        'UAH', "SGD","MYR","EUR","USD","AUD",
        "JPY","CNH","HKD","CAD","INR","DKK",
        "GBP","RUB","NZD","MXN","IDR","TWD",
        "THB","VND"
    ]
    
    useEffect(() => {
        get(from, to)
    }, [from, to])

    const list = options.map((item, i) =>
        <option key={item}>{item}</option>
    );

    function submit(e) {
        if(e.charCode === 13 && fromInput > 0) {
            props.submit({ from, to, fromInput, toInput })
            setFromInput(0)
            setToInput(0)
        }
    }

    function reverse() {
        setFrom(to)
        setFromInput(toInput)
        setTo(from)
        setToInput(fromInput)
    }

    function fromEnter(e) {
        let a = +e.target.value
        setFromInput(a)
        setToInput((a * value).toFixed(2))
    }

    function toEnter(e) {
        let a = +e.target.value
        setToInput(a)
        setFromInput((a / value).toFixed(2))
    }

    return (
        <div className="container form glass">
            <div className="flex">
                <select 
                    className="glass"  
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                >
                    {list}
                </select>
                <button className="btn glass" onClick={reverse}>
                    <AiOutlineSwap size="1.4em" className="btn-icon"/>
                </button>
                <select 
                    className="glass" 
                    value={to} 
                    onChange={(e) => setTo(e.target.value)}
                >
                    {list}
                </select>
            </div>
            <div className="flex">
                <input 
                    type="number"  
                    className="glass" 
                    value={fromInput} 
                    onChange={fromEnter}
                    onKeyPress={submit}
                    min="0"
                />
                <div>1 {from} = {value.toFixed(2)} {to}</div>
                <input 
                    type="number" 
                    className="glass" 
                    value={toInput}
                    onChange={toEnter}
                    onKeyPress={submit} 
                    min="0"
                    />
            </div>
     </div>
        
)}