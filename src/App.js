
import './App.css';

import React from 'react';
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndDate from './components/TimeAndDate';
import WeatherDetails from "./components/WeatherDeatils";


function App() {
  return (
    <>
    <div className='mx-auto max-w-screen-md sm:max-w-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-400 to-blue-400 shadow-xl shadow-gray-400'>
    <TopButtons/>
    <Inputs/>
    <TimeAndDate/>
    <WeatherDetails/>
    </div>
    
  </>
    
  );
}

export default App;
