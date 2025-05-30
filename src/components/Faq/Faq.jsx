import React, { useState } from 'react'
import { Yogadesc, YogaHeading } from '../../ui/Styledcomponents'

const faqData = [
    {
        question: "What is Maharidhivedvyasa foundation Yoga?",
        answer: "Maharidhivedvyasa foundation is a wellness center that helps individuals transform their lives through Yoga, meditation, and mindfulness."
    },
    {
        question: "Do I need experience to join?",
        answer: "Absolutely not! We welcome all levels – from beginners to advanced practitioners."
    },
    {
        question: "What are your session timings?",
        answer: "Our sessions run from 6:00 AM to 9:00 PM every day. You can choose your preferred time slot."
    },
    {
        question: "Is there a trial class available?",
        answer: "Yes, you can book a free trial class to experience our sessions and ambiance."
    }
];

const AccordionItem = ({ question, answer, isOpen, onClick }) => (
    <div className="border-b border-brown">
        <button
            onClick={onClick}
            className="w-full flex justify-between items-center py-4 text-left text-lg font-semibold text-brown"
        >
            {question}
            <span>{isOpen ? '-' : '+'}</span>
        </button>
        {isOpen && <p className="text-gray-600 pb-4">{answer}</p>}
    </div>
);

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const handleToggle = (index) => {
        if (openIndex !== index) {
            setOpenIndex(index);
        }
    };

    return (
        <section>
            <div className='w-full grid md:grid-cols-2 grid-cols-1 items-center'>
                {/* Left Side */}
                <div className='text-end w-full bg-[#7E8446] py-20 p-10'>
                    <h1 className='font-satisfy text-white font-bold md:text-5xl text-2xl'>
                        Your life of Yoga
                        <br />
                        <span className='md:text-2xl font-semibold text-xl'>with</span>
                    </h1>
                    <YogaHeading className='text-white' text={"text-end"}>
                        Maharidhivedvyasa foundation
                    </YogaHeading>
                    <Yogadesc className="text-white" text={"text-end"}>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.
                        Aenean the secret is to fill most of the part with amazing fillers imperdiet.
                    </Yogadesc>

                    <div className="flex flex-col items-start gap-1 mt-4">
                        <span className="bg-brown w-full h-1"></span>
                        <span className="border-t-2 border-dotted border-brown w-full"></span>
                    </div>

                    <p className='md:text-3xl text-white text-xl mt-4'>
                        Take a look at the amazing features & ask yourself the question?
                    </p>
                    <button className='px-5 py-2 mt-4 bg-brown text-white rounded'>
                        About us
                    </button>
                </div>

                {/* Right Side Accordion */}
                <div className=" bg-[#ECE6D7] w-full h-full p-10 py-32 rounded-xl shadow-md"
                    style={{ backgroundImage: "url(/floral-bg-parallax.png)" }}
                >
                    <div>
                        {faqData.map((item, index) => (
                            <AccordionItem
                                key={index}
                                question={item.question}
                                answer={item.answer}
                                isOpen={openIndex === index}
                                onClick={() => handleToggle(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq
