import { Button } from '@mui/material'
import React from 'react'

const Banner = () => {
  return (
    <div className='banner w-full md:w-2/3 px-7 mx-auto relative flex items-center justify-between'>
        <div className='banner-deescription w-full md:w-1/2 p-3'>
            <h2 className='mb-6 text-4xl font-bold text-white'>
                Order Your Favoirite <span className='text-yellow-500'>Food</span> Easily
            </h2>
            <p className='text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo culpa impedit et, quae labore quos nisi provident inventore cum similique quam voluptatum dolore. Minima voluptatibus id consequatur aliquid tenetur numquam!</p>
            <div className='btn-container mt-2'>
                <button type="button" class="focus:outline-none text-white bg-yellow-500 hover:bg-yellow-600  focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Order Now</button>
            </div>
        </div>
        <div className='banner-image w-full md:w-1/2 p-3'>
            <img src={require('../assets/images/burger_banner.png')} alt='banner' className='max-h-[450px]' />
        </div>
    </div>
  )
}

export default Banner
