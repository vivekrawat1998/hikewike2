import React from 'react';

const Profile = ({ text }) => {
    return (
        <>
            {/* Background block */}
            <img src='/LOGO (9) (1).png' alt='' className='absolute -z-10 inset-0 bg-green h-[40vh] w-full'/>
            {/* Foreground content */}
            <div className='w-full relative  -mt-10 grid place-items-center '>
                <img src='/LOGO (7).png' alt='' className=" w-full h-[50vh] inset-0 object-cover absolute -z-10" />
                <div className='w-full  p-10 bg-white'>
                    <div className='flex justify-between gap-5 items-center'>
                        <div>
                            <h1 className='md:text-3xl text-xl text-gray-800 font-ptserif font-bold border-b-4 border-brown inline-block pb-2'>
                                {text}
                            </h1>
                        </div>
                        <div>
                            <h2 className='md:text-xl text-gray-600 uppercase'>Home - {text}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
