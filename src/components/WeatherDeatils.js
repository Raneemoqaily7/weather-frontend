import { useState } from 'react';
import React from "react";
import axios from "axios";
import { UilTemperatureEmpty, UilWind, UilTear, UilSun } from '@iconscout/react-unicons'

function WeatherDetails(props) {
    const [inputValue ,setInputValue] =useState("")
  const [temp ,setTemp] =useState("")
  
  const handleInputChange =(e)=>{
    setInputValue(e.target.value)
  
  }
  const searchHandler =()=>{
    
    
   
    // const body = {
    //   data: {
    //     "address": inputValue
    //   }
    // }

    axios.post("http://127.0.0.1:8000/api/add/",{"address":inputValue})
  
    .then ((res) =>{

      axios.get (`http://127.0.0.1:8000/api/country/${inputValue}/days=5`)
      .then((res)=>{
       console.log(res.data)
       console.log(res.data.res)
        setTemp(res.data.current.temp_c)
        // setText(res.data.res.current.condition.text)
        // setShowCard(true)
  
         }).catch((err)=>{
        console.log(err ,"errror")
      })
      
      



    })
   
   

      
  }


    return (
        <>

            <div>
                <p className="text-emerald-600 flex justify-center items-center py-4 
                capitalize">clear and rainy</p>
            </div>

            <div className="flex flex-row justify-between py-3">
                <img src="https://th.bing.com/th/id/OIP.Qj9WLzEPn_cbiLC1bCDISwHaHa?w=198&h=198&c=7&r=0&o=5&pid=1.7" alt="weather status" className="rounded-md w-6 h-6 mt-2 " />

                <p className="text-white text-4xl ">{temp}</p>
                <div className="flex flex-col space-y-2 ">
                    <div className="ml-2 flex justify-center items-center font-extralight text-sm text-white">
                        <UilTemperatureEmpty size={20} />wind
                        <span className="ml-1">32</span>
                    </div>
                    <div className="ml-2 flex justify-center items-center font-extralight text-sm text-white">
                        <UilWind size={20} />wind
                        <span className="ml-1">32</span>
                    </div>
                    <div className="ml-2 flex justify-center items-center font-extralight text-sm text-white">
                        <UilTear size={20} />wind
                        <span className="ml-1">32</span>
                    </div>


                </div>

               

            </div>
            <div className="flex flex-row justify-center w-full text-sm  whitespace-nowrap items-center py-3 text-white font-extralight">
            <UilSun className="mr-1" />  
                <p>    High :  <span className="ml:1 font-sans">high |</span></p>
                
             
              
              
                
                <UilSun className="mr-1" /> 
                <p>
                   Low :  <span className="ml:1 font-sans">  low</span></p>              

            </div>
          




        </>
    )

}
export default WeatherDetails;