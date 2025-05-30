import React from 'react'
import Profile from '../ui/Profile'
import Aboutussection from '../components/about/Aboutussection'
import Teams from '../components/Team/Teams'
import Faq from '../components/Faq/Faq'
import Oursepecial from '../components/Oursepecial'
import Testimonials from '../components/testimonials/Testimonails'
import Gallery from '../components/Gallery'

const Aboutus = () => {
    return (
        <div className="grid w-full place-items-center">
            <div className='md:w-[90%] bg-[#F5F0E3] py-10'>
                <Profile text={"About us"} />

                <div className=' grid place-items-center  mx-auto '>
                    <Aboutussection />
                </div>
            </div>
            <Teams />
            <Faq />
            <Oursepecial />
            <Gallery />

        </div>
    )
}

export default Aboutus
