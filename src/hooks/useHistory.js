import { useState } from "react"
export default function useHistory() {
    if(!localStorage.getItem('db'))
      localStorage.setItem('db', JSON.stringify([]))

    let data = JSON.parse(localStorage.getItem('db'))
    data.forEach(row => {
        row.created = new Date(row.created)
    });
    const [history, setHistory] = useState(data)

    
    return [history, setHistory]
}