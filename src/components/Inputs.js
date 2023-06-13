import React, { useEffect, useState } from 'react';
import { UilSearch, UilLocationPoint, UilTemperatureEmpty, UilArrowUp, UilWind, UilArrowDown, UilTear, UilSun } from '@iconscout/react-unicons';

import axios from 'axios';



function Inputs({onClick } ) {
  const [mapHtml, setMapHtml] = useState('');
  const [inputValue, setInputValue] = useState("")
  const [temp, setTemp] = useState("")
  const [localTime, setLocalTime] = useState("")
  const [text, setText] = useState("")
  const [pressure, setPressure] = useState("")
  const [wind, setWind] = useState("")
  const [humidity, setHumidity] = useState("")
  const [forcast, setForcast] = useState([])
  const [showCard, setShowCard] = useState(false)
  const [maxtemp,setMax]=useState("")
  const[mintemp,setMin]=useState("")

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/index/')
      .then((res)=>{
//        
setMapHtml(res.data.map)




      })
      
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude
        let lon = position.coords.longitude
        let address = position.coords.address

        axios.get(`http://127.0.0.1:8000/api/lat/${lat}/lon/${lon}/`)
        
          .then((res) => {
            setInputValue(res.data.location.name)
            setTemp(res.data.current.temp_c)
            // console.log(res.data.location.localtime ,"locaaaaaaaal")
            setLocalTime(res.data.location.localtime)
            setText(res.data.current.condition.text)
            setPressure(res.data.current.pressure_in)
            setWind(res.data.current.wind_kph)
            setHumidity(res.data.current.humidity)
        
  
            

          })
         
      })
    }
  }
  const handleInputChange = (e) => {
    setInputValue(e.target.value)



  }
  const searchHandler = () => {



 

    axios.post("http://127.0.0.1:8000/api/add/", { "address": inputValue })

      .then((res) => {

        axios.get(`http://127.0.0.1:8000/api/country/${inputValue}/days=5`)
          .then((res) => {
            console.log((res.data.forecast.forecastday))
            setForcast(res.data.forecast.forecastday)
            // console.log(res.data.res)
            // setData(res.data)
            setTemp(res.data.current.temp_c)
            // console.log(res.data.location.localtime ,"locaaaaaaaal")
            setLocalTime(res.data.location.localtime)
            setText(res.data.current.condition.text)
            setPressure(res.data.current.pressure_in)
            setWind(res.data.current.wind_kph)
            setHumidity(res.data.current.humidity)
            setMax(res.data.forecast.forecastday[0].day.maxtemp_c)
            setMin(res.data.forecast.forecastday[0].day.mintemp_c)
            axios.get('http://127.0.0.1:8000/api/index/')
            .then((res)=>{
      
      setMapHtml(res.data.map)
      
      

      
            })
          
            setShowCard(true)


           

          }).catch((err) => {
            console.log(err, "errror")
          })





      })




  }
 
  

  return (
    <div >
      <div className="flex flex-row  space-x-4 justify-start w-full" dangerouslySetInnerHTML={{ __html: mapHtml }}></div>

      <div className='flex flex-row justify-around my-6 ' >
        <div className='flex flex-row items-center space-x-4  w-3/4' >
          <input className='w-full p-2 capitalize placeholder:lowercase  font-light focus:outline-none text-xs'
            type='text'
            value={inputValue}
            onChange={handleInputChange}
            placeholder='search city...' />
          <UilSearch onClick={searchHandler} className='text-white cursor-pointer transition ease-linear hover:scale-150' size={25} />
          <UilLocationPoint onClick={handleLocation} className='text-white mr-cursor-pointer   transition ease-linear hover:scale-150' size={25} />



        </div>


        <div className='ml-3 flex flex-row w-0 text-white items-center text-xl'>
          <button onClick={onClick } >°C</button>
          {/* <p className="mx-1"> |</p>
       
            <button onClick={onClick } > °F</button> */}

        </div>


      </div>
      <div className="flex  flex-row items-center justify-center my-6">
        <p className=" text-white font-extralight  whitespace-nowrap ">{localTime}</p>
      </div>
      <div className="flex flex-row  justify-center items-center py-3">
        <p className=" text-white font-bold text-xl">{inputValue} </p>

      </div>


      <div>
        
        <p className="text-blue-950 flex justify-center items-center py-4 
                capitalize">{text}</p>
      </div>

      <div className="flex flex-row justify-between py-3">
        {/* <img src="https://th.bing.com/th/id/OIP.Qj9WLzEPn_cbiLC1bCDISwHaHa?w=198&h=198&c=7&r=0&o=5&pid=1.7" alt="weather status" className="rounded-md w-6 h-6 mt-2 mr-2 " /> */}

        <p className="text-white text-4xl ml-2">{temp}</p>
        <div className="flex flex-col space-y-2 ml-3">
          <div className="ml-2 flex justify-center items-center font-extralight text-sm text-white">
            <UilTemperatureEmpty size={20} />Pressure
            <span className="ml-1">{pressure}</span>
          </div>
          <div className="ml-2 flex justify-center items-center font-extralight text-sm text-white">
            <UilWind size={20} />Wind_kph
            <span className="ml-1">{wind}</span>
          </div>
          <div className="ml-2 flex justify-center items-center font-extralight text-sm text-white">
            <UilTear size={20} />Humidity
            <span className="ml-1">{humidity}</span>
          </div>


        </div>



      </div>
      <div className="flex flex-row justify-center w-full text-sm  whitespace-nowrap items-center py-3 text-white font-extralight">
        <UilArrowUp className="mr-1" />
        <p>    High :  <span className="ml:1 font-sans">{maxtemp}|</span></p>





        <UilArrowDown className="mr-1" />
        <p>
          Low :  <span className="ml:1 font-sans">  {mintemp}</span></p>

      </div>


{showCard &&(
      <div>
        <div className="flex items-center justify-start mt-4 text-white">
          <p className="text-white font-medium">Daily Forcast</p>
        </div>
        <hr className="my-2" />
        <div className="">
          {forcast.map(obj => {
            console.log(obj.date, "date");
            console.log(obj.day); // Access other properties as needed
            console.log(obj.astro);
            console.log(obj.hour[0].time.temp_c, "hooooooooooour");
            return (
              <div className="flex flex-row items-center justify-start" key={obj.date}>
                <div className="p-2 rounded-lg mr-4">
                  <p className="text-sm text-amber-600 font-bold">{obj.date}</p>
                  <div className="grid grid-cols-4 gap-4  text-white">
                    {obj.hour.map(obj => {
                      console.log(obj.time, "tttt");
                      return (
                        <div className="p-2 rounded-md mt-2" key={obj.time}>
                          <p className="text-sm py-2">{obj.time.split(" ")[1]}</p>
                          <p className="text-sm py-2">°{obj.temp_c}</p>
                          <p className="text-xs py-2">{obj.condition.text}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}







         
        </div>
      </div>
)}

    </div>
  )
}
export default Inputs