import React from 'react'
import { Yogadesc, YogaHeading } from '../ui/Styledcomponents'

const Ypfaquotes = () => {
    return (
        <section className=''>
            <div className='w-full bg-[#F5F0E3] min-h-screen relative '
                style={{
                    backgroundImage: 'url(/parallax-decor.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '20px',
                }}
            >
                <img src='/dt-sc-flowtop-bgimage (1).png' alt='' className='absolute w-full top-14   z-45'/>
                    <div className=' relative w-2xl  md:-left-72 top-0 text-end  px-4'>
                        <h1 className='font-satisfy text-brown font-bold md:text-5xl text-2xl'>
                            Your life of Yoga
                            <br />
                            <span className='md:text-2xl font-semibold text-xl'>with</span>
                        </h1>
                        <YogaHeading className='text-[#7E8846] '
                            text={"text-end"}
                        >
                            Maharidhivedvyasa foundation
                        </YogaHeading>
                        <div className=''>
                            <Yogadesc
                                text={"text-end"}
                            >
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Phasellus viverra nulla ut metus varius laoreet. Aenean the secrece is to fill mosta of the part with amazing fillers imperdiet.
                            </Yogadesc>

                            <div className="flex flex-col items-start gap-1">
                                <span className="bg-brown w-full  h-1"></span>
                                <span className="border-t-2 border-dotted border-brown w-full "></span>
                            </div>

                            <p className='md:text-3xl text-xl mt-4'>
                                Take a look at the amazing features & ask yourself the question?
                            </p>
                            <button className='px-5 py-2 mt-4 bg-brown text-white rounded'>
                                About us
                            </button>
                        </div>
                    </div>
            </div>

        </section>
    )
}

export default Ypfaquotes
