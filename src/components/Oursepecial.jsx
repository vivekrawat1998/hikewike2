import React from 'react'
import { YogaBorder, Yogadesc, YogaHeading } from '../ui/Styledcomponents'

const stats = [
    { label: "Yoga", percentage: 80, sub: "For the young & aged", color: "#7E8446" },     // Olive
    { label: "Mediation", percentage: 65, sub: "Years of Experience", color: "#A67C52" }, // Brownish
    { label: "Sprituality", percentage: 60, sub: "In-house Staffs", color: "#6B5B95" },   // Purple
    { label: "Retreats", percentage: 75, sub: "Years of Experience", color: "#FF6F61" },  // Coral
    { label: "Fitness", percentage: 90, sub: "Daily Workouts", color: "#009688" },        // Teal
];

const StatCircle = ({ label, percentage, sub, color }) => {
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference * (1 - percentage / 100);

    return (
        <div className="flex flex-col items-center text-center">
            <div className="relative w-32 h-32">
                <svg className="w-full h-full transform -rotate-90">
                    <circle
                        cx="50%"
                        cy="50%"
                        r={radius}
                        stroke="#ddd"
                        strokeWidth="10"
                        fill="none"
                    />
                    <circle
                        cx="50%"
                        cy="50%"
                        r={radius}
                        stroke={color}
                        strokeWidth="10"
                        fill="none"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                    />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-bold" style={{ color }}>{percentage}%</span>
                    <span className="text-sm font-medium text-brown">{label}</span>
                </div>
            </div>
            <p className="mt-2 text-sm text-gray-700">{sub}</p>
        </div>
    );
};

const Oursepecial = () => {
    return (
        <div className='w-full h-full grid place-items-center   py-10'>
            <YogaHeading>Our Specials</YogaHeading>
            <YogaBorder />
            <Yogadesc text={'text-center'}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.
                Phasellus viverra nulla ut metus varius rutrum.
            </Yogadesc>

            <div className="mt-10  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center px-4">
                {stats.map((stat, index) => (
                    <StatCircle
                        key={index}
                        label={stat.label}
                        percentage={stat.percentage}
                        sub={stat.sub}
                        color={stat.color}
                    />
                ))}
            </div>
        </div>
    )
}

export default Oursepecial
