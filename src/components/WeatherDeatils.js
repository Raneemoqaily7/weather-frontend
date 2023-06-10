import React from "react";
import { UilTemperatureEmpty, UilWind, UilTear } from '@iconscout/react-unicons'
function WeatherDetails() {

    return (
        <>

            <div>
                <p className="text-emerald-600 flex justify-center items-center py-4 capitalize">clear and rainy</p>
            </div>

            <div className="flex flex-row justify-between py-3">
                <img src="https://th.bing.com/th/id/OIP.Qj9WLzEPn_cbiLC1bCDISwHaHa?w=198&h=198&c=7&r=0&o=5&pid=1.7" alt="weather status" className="rounded-md w-6 " />

                <p className="text-white text-4xl ">°24</p>
                <div className="flex flex-col space-y-2 ">
                    <div className= "ml-2 flex justify-center items-center font-extralight text-sm text-white">
                        <UilTemperatureEmpty size={20}/>wind
                        <span className="ml-1">32</span>
                    </div>
                    <div className="ml-2 flex justify-center items-center font-extralight text-sm text-white">
                        <UilWind size={20}/>wind
                        <span className="ml-1">32</span>
                        </div>
                        <div className="ml-2 flex justify-center items-center font-extralight text-sm text-white">
                            <UilTear size={20} />wind
                            <span className="ml-1">32</span>
                        </div>


                    </div></div>





                </>
                )

}
                export default WeatherDetails;