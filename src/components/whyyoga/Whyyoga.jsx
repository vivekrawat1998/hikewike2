import React from 'react'
import { YogaHeading } from '../../ui/Styledcomponents'
import Whyyogacard from './Whyyogacard'

const Whyyoga = () => {
  const yogaBenefits = [
    {
      id: 1,
      title: "COMPLETE VIDEO SUPPORT",
      icon: "/ico-ying-yang.png",
      desc: "Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat."
    },
    {
      id: 2,
      title: "TONS OF CUSTOMIZATION",
      icon: "/ico-stones.png",
      desc: "Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat."
    },
    {
      id: 3,
      title: "EASY TO SETUP",
      icon: "/ico-cog-wheel.png",
      desc: "Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat."
    },
  ]

  return (
    <div className="w-full bg-[#F5F0E3] px-4 sm:px-6 md:px-10 text-center mx-auto grid place-items-center">
      <div className="max-w-7xl mx-auto py-16 sm:py-24 md:py-32">
        <YogaHeading>WHY Maharidhivedvyasa foundation?</YogaHeading>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 gap-8 sm:gap-10 place-items-center">
          {yogaBenefits.map((benefit) => (
            <Whyyogacard
              key={benefit.id}
              title={benefit.title}
              icon={benefit.icon}
              desc={benefit.desc}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Whyyoga

