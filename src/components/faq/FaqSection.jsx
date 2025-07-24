import React, { useState } from "react";

// Uttarakhand Trekking FAQs
const FAQS = [
    {
        question: "What is the best time to trek in Uttarakhand?",
        answer:
            "The ideal seasons are April–June (spring/summer) and September–November (autumn). Winter treks like Kedarkantha are great in December–February for snowy experiences.",
    },
    {
        question: "Which are the most popular treks in Uttarakhand?",
        answer:
            "Kedarkantha, Valley of Flowers, Har Ki Dun, Roopkund, Kuari Pass, Nag Tibba, Brahmatal, Panch Kedar, and Satopanth Lake are among the top treks.",
    },
    {
        question: "Do I need prior experience to trek in Uttarakhand?",
        answer:
            "Many treks (like Kedarkantha, Nag Tibba, Valley of Flowers) are beginner-friendly. Challenging treks (such as Roopkund or Kalindi Khal) require prior trekking experience.",
    },
    {
        question: "What is the average duration and altitude of Uttarakhand treks?",
        answer:
            "Treks range from 2 to 8 days; altitudes vary from 2,000m (Nag Tibba) to 5,000m (Roopkund, Satopanth Lake). Allow time to acclimatize, especially over 3,000m.",
    },
    {
        question: "What permits or registrations are required?",
        answer:
            "Permits are required for National Parks (e.g., Valley of Flowers). Foreign nationals may need extra registrations. Always check latest requirements with your operator.",
    },
    {
        question: "What should I pack for a Uttarakhand trek?",
        answer:
            "Layered clothing, rain jacket, trekking shoes, backpack, headlamp, water bottle, medicines, and ID proof. High-altitude/longer treks need extra gear like sleeping bags and trekking poles.",
    },
    {
        question: "Is it safe to trek solo in Uttarakhand?",
        answer:
            "Most trails are safe with precautions, but trekking in groups or with a registered operator is recommended due to unpredictable weather, wildlife, and trail navigation.",
    },
    // {
    //     question: "Are mobile networks and ATMs available on the trails?",
    //     answer:
    //         "Mobile networks are patchy or unavailable in remote areas. ATMs are available in base towns—carry enough cash before starting your trek.",
    // },
    // {
    //     question: "How is the food and accommodation during treks?",
    //     answer:
    //         "Popular treks have simple vegetarian meals and basic huts, homestays, or tent accommodation. Some base villages offer higher comfort levels.",
    // },
    // {
    //     question: "Can children or older adults join these treks?",
    //     answer:
    //         "Children above 8 and fit older adults can do easy treks (Nag Tibba, Valley of Flowers, Deoriatal-Chandrashila). Consult a doctor and inform your operator of health conditions.",
    // },
];

const FAQItem = ({ faq, open, onClick }) => (
    <div className="border-b last:border-b-0 border-gray-200">
        <button
            className="w-full flex justify-between items-center py-5 px-6 text-left focus:outline-none transition-colors"
            onClick={onClick}
        >
            <span className="font-medium text-gray-900">{faq.question}</span>
            <svg
                className={`w-5 h-5 ml-2 transform transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"
                    }`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
            >
                <path d="M19 9l-7 7-7-7" />
            </svg>
        </button>
        {open && (
            <div className="px-6 pb-5 text-gray-700 transition-all duration-300">
                {faq.answer}
            </div>
        )}
    </div>
);

const FAQSection = () => {
    const [openIdx, setOpenIdx] = useState(null);

    const handleToggle = idx => {
        setOpenIdx(openIdx === idx ? null : idx);
    };

    return (
        <section className="w-full flex items-center px-10">
            <div className="font-parkinsans max-w-8xl mx-auto border border-gray-200 w-full mx-auto my-12 rounded-2xl bg-gray-50 shadow-lg">
                <h2 className="text-2xl md:text-3xl text-start font-bold py-8 text-gray-900 ml-5">
                    Frequently Asked Questions
                </h2>
                <div>
                    {FAQS.map((faq, idx) => (
                        <FAQItem
                            key={idx}
                            faq={faq}
                            open={openIdx === idx}
                            onClick={() => handleToggle(idx)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
