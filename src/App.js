import React, { useState } from 'react'
import LoadingPage from './Components/LoadingPage'
import Navbar from './Components/Navbar'
import HomePage from './Components/HomePage'
import './style.css'
export default function App() {
  const [navColor, setnavColor] = useState("#00444c");
  const [textColor, settextColor] = useState('white');
  // const [moveLoadingPage, setmoveLoadingPage] = useState(false);
  return (
    <div>
        <Navbar backGround={navColor} textColor={textColor}/>
        <LoadingPage changeNav={setnavColor} settextColor={settextColor}/>
        <HomePage changeNav={setnavColor} settextColor={settextColor}/>
    </div>
  )
}
