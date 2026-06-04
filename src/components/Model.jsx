import React, { useState } from 'react'
import { models, sizes } from '../constants'
import { yellowImg } from '../utils'

const Model = () => {
  const [size, setSize] = useState('small')
  const [model, setModel] =useState({
        id: 1,
        title: "iPhone 15 Pro in Natural Titanium",
        color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
        img: yellowImg,
  })
  return (
    <section className='common-padding'>
      <div className='screen-max-width'>
        <h1 is='heading' className='section heading'>
          Take a closer look
        </h1>

        <div className='flex flex-col items-center'>
          <div>
            image models
          </div>
          <div>
            <p>{model.title}</p>
            <div className='bg-gray-300 w-44 p-5 rounded-4xl'>
              <div className='flex justify-around'>
                  {models.map((item,i)=>(
                    <li key={i} className='w-5 h-5 list-none rounded-full cursor-pointer' style={{backgroundColor:item.color[0]}} onClick={()=> setModel(item)} />
                  ))}
              </div>
              <div className=''>
                {sizes.map(({label,value},i)=>(
                  <div key={i}  style={{backgroundColor: size === value ? 'white' : 'transparent' , color: size === value ? 'black' : 'white'}} onClick={()=>setSize(value)}>{label}</div>
                ))}
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </section>
  )
}

export default Model
