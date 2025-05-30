import React from 'react';
import { YogaBorder, Yogadesc, YogaHeading } from '../../ui/Styledcomponents';
import Yogacard from './Yogacard';

const yogaCardData = [
    {
        image: '/gallery2.jpg',
        description: 'Practice mindfulness and strengthen your body through Hatha yoga sessions.'
    },
    {
        image: '/gallery3.jpg',
        description: 'Experience inner peace with guided meditation and breathing techniques.'
    },
    {
        image: '/gallery4.jpg',
        description: 'Stretch and relax with evening flow routines designed for all levels.'
    },
    {
        image: '/blog9.jpg',
        description: ' relax with evening flow routines designed for all levels.'
    },
];

const YogaType = () => {
    return (
        <div className="w-full md:h-screen md:py-52 py-20 bg-no-repeat   px-4  text-center"
            style={{ backgroundImage: 'url("/LOGO (7).png")', backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="max-w-6xl mx-auto">
                <YogaHeading>
                    A BRIEF DESCRIPTION ABOUT THE WAYS OF YOGA
                </YogaHeading>
                <YogaBorder />
                <div className="my-6 w-full grid place-items-center">
                    <Yogadesc>
                        We at Maharidhivedvyasa foundation provide various services to the nature of the clients. Wish how you would like to spend the time here
                        we can talk and come to a conclusion.
                    </Yogadesc>
                </div>

                <div className="grid grid-cols-1 place-items-center md:grid-cols-4 gap-6 mt-10">
                    {yogaCardData.map((card, index) => (
                        <Yogacard key={index} image={card.image} description={card.description} />
                    ))}
                </div>
            </div>
        </div>
    ); ``
};

export default YogaType;
