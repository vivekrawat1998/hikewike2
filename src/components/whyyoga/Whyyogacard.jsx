import React from 'react'

const Whyyogacard = ({key, title, desc, icon}) => {
    return (
        <div key={key} className='flex items-center  gap-8 w-full  mx-auto '>
          <img src={icon} alt='' className='w-20 h-20 object-cover' />
            <div className='text-start '>
                <h1 className='md:text-xl text-lg text-brown font-ptserif whitespace-nowrap'>{title}</h1>
                <div className="flex flex-col items-start gap-1">
                    <span className="bg-brown w-full w-32 h-1"></span>
                    <span className="border-t-2 border-dotted border-brown w-full"></span>
                </div>
                <p className='font-Rosario text-gray'>{desc}</p>
            </div>
        </div>
    )
}

export default Whyyogacard