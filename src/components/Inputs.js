import React from 'react'
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'

function Inputs() {





  return (

    <div className='flex flex-row justify-around my-6'>
      <div className='flex flex-row items-center space-x-4  w-3/4'>
        <input className='w-full p-2 capitalize placeholder:lowercase  font-light focus:outline-none text-xs'
          type='text'
          placeholder='search city...' />
        <UilSearch className='text-white cursor-pointer transition ease-linear hover:scale-150' size={25} />
        <UilLocationPoint className='text-white mr-cursor-pointer   transition ease-linear hover:scale-150' size={25} />



      </div>


      <div className='ml-3 flex flex-row w-0 text-white items-center text-xl'>
        <button>°C</button>
        <p className="mx-1"> | </p>
        <button> °F</button>

      </div>


    </div>
  )
}
export default Inputs