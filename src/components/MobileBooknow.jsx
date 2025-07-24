import React from 'react'

const MobileBooknow = ({ date, estimatedcost }) => {
    return (
        <div className='w-full flex justify-between items-center shadow-2xl  border-t border-gray-200 bg-white px-4 py-4 font-parkinsans'>
            <div>
                <h1 className='text-[13px]'>{date}</h1>
                <div className='flex items-center'>
                    <h2 className='text-[16px] mt-2 font-bold'>Starting {estimatedcost}</h2><span className='text-gray-400 text-[10px] mt-2 font-medium'>/Person</span>
                </div>
            </div>
            <div>
                <button className="w-full bg-[#F36F25] text-white px-5 mt-2 py-2 rounded-full font-semibold text-sm transition hover:bg-[#F36F05] mb-3">
                    Send Enquiry
                </button>
            </div>
        </div>
    )
}

export default MobileBooknow