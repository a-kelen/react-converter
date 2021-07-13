// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Form from './components/Form';
import HistoryList from './components/HistoryList';
import useHistory from './hooks/useHistory'
import uuid from 'uuid'
export default function App () {
  const [history, setHistory] = useHistory()

  function addToHistory(item) {
    item.id = uuid()
    item.created = new Date()
    const newHistory = [...history]
    newHistory.unshift(item)
    setHistory(newHistory)
    localStorage.setItem('db', JSON.stringify(newHistory))
  }
  function clearHistory() {
    localStorage.removeItem('db')
    setHistory([])
  }
  return(
    <div>
      <Form submit={addToHistory}/>
      <HistoryList items={history} clear={clearHistory}/>
    </div>
)}


// export default App;
