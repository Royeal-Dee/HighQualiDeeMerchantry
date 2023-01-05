import React from 'react'
import "../../components/styles/App.css"

export default function Navbar({setToken}) {
  const logOutHandler = () => {
    setToken("");
    localStorage.clear();
  }
  return(
    <div className="navbar">
    <h1>HighQualiDee Merchantry</h1>
    <button className="log-out-btn" onClick={() => logOutHandler()}>
    Log Out
    </button>
    </div>
  )
}