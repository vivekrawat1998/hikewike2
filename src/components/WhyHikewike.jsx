import React from "react";
import { UserCheck, Flag, UserCog, BarChart2, HandMetal } from "lucide-react"; // Use lucide icons or replace with custom inline SVGs

const reasons = [
  {
    icon: <UserCheck className="text-emerald-500 w-10 h-10" />,
    title: "Solo is safe.",
    desc: (
      <>
        Girlies, you're safe AF. No need to wait on fam or besties—just pack and
        go! Explore stress-free with 100% freedom!
      </>
    ),
  },
  {
    icon: <Flag className="text-green-600 w-10 h-10" />,
    title: "We're the greenest flag.",
    desc: "We ensure safety with verified stays, reliable transport, and trained guides for a secure, comfy, and hassle-free trip.",
  },
  {
    icon: <UserCog className="text-emerald-400 w-10 h-10" />,
    title: "Our Group Captains are fire.",
    desc: "Our awesome trip captains are part-guide, part-friend and full time vibe curators.",
  },
  {
    icon: <BarChart2 className="text-pink-600 w-10 h-10" />,
    title: "No kebab main haddi.",
    desc: "No middlemen, no hidden fees. Enjoy direct bookings, lower costs, and personalized support for a seamless and affordable trip.",
  },
  {
    icon: <HandMetal className="text-emerald-400 w-10 h-10" />,
    title: "Vibe check comes first.",
    desc: "We customize your trips based on age groups, so you're not stuck vibing to someone else's playlist without permission.",
  },
];

export default function ReasonsToTravel() {
  return (
    <section className="relative bg-[#c2dad7] font-parkinsans pb-16 pt-12">
      <div className="max-w-6xl mx-auto px-2 sm:px-4 relative z-10">
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-10">
          Reasons To Make Us Your Travel Bestie
        </h2>
        {/* Flex parent, flex-wrap for responsive wrapping */}
        <div className="flex flex-wrap gap-8 justify-center">
          {/* Top row (3 cards) */}
          <div className="w-full flex flex-col md:flex-row gap-8 justify-center mb-4">
            <ReasonCard {...reasons[0]} />
            <ReasonCard {...reasons[1]} />
            <ReasonCard {...reasons[2]} />
          </div>
          {/* Bottom row (2 cards) -- centered, align as in screenshot */}
          <div className="w-full flex flex-col md:flex-row gap-8 justify-center">
            <ReasonCard {...reasons[3]} />
            <ReasonCard {...reasons[4]} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ReasonCard({ icon, title, desc }) {
  return (
    <div className="flex-shrink-0 bg-white font-parkinsans rounded-2xl shadow-sm p-7 flex items-start gap-4 w-full md:w-[360px] xl:w-[410px]">
      <div className="shrink-0">{icon}</div>
      <div>
        <h3 className="font-bold text-lg font-parkinsans mb-1">{title}</h3>
        <p className="text-gray-700 text-[15px] leading-snug">{desc}</p>
      </div>
    </div>
  );
}
