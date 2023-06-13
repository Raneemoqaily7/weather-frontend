
import './App.css';

import React ,{useState} from 'react';
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndDate from './components/TimeAndDate';
import WeatherDetails from "./components/WeatherDeatils";
import Forcast from "./components/Forcast"
import axios from 'axios';


function App() {
  const[bgColor,setPgColor]=useState("#76b5c5")
  const handleColorClick = () => {
    // Toggle the background color between white and blue
    const newBgColor = bgColor === '#76b5c5' ? "#e28743" : '#76b5c5';
    setPgColor(newBgColor);
    console.log(newBgColor ,"color")
  };
  

  return (
    <>
    <div  className='mx-auto max-w-screen-md sm:max-w-md mt-4 py-5 px-32 ' style={{ backgroundColor: bgColor }}>
    <TopButtons/>
    <Inputs onClick={handleColorClick}/>
    {/* <TimeAndDate onClick={searchHandler}/> */}
    {/* <WeatherDetails/> */}
    {/* <Forcast title="Hourly Forcast"/> */}
    {/* <Forcast title="Daily Forcast"/> */}
    </div>
    
  </>
    
  );
}

export default App;
