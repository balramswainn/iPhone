import React from 'react'
import { hightlightsSlides } from '../constants'

const VideoCarousel = () => {
  return (
    <div className='flex items-center'>
      {hightlightsSlides.map((list,i)=>(
        <div key={list.id} className='sm:pr-20 pr-10 relative'>
          <div className='sm:w-[70vw] w-[88vw] md:h-[70vh] sm:h-[50vh] h-[35vh]'>

          <div className='w-full h-full flex-center rounded-3xl overflow-hidden bg-black  flex items-center justify-center'>
            <video className='' id="video" playsInline={true} preload='auto' muted > 
              <source src={list.video} />
            </video>
            <p className='absolute top-2 left-3'>{list.textLists}</p>
          </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default VideoCarousel
