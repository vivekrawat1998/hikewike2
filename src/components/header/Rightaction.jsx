import React from "react";
import { PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";
import ShinyText from "../../ui/ShinyText";

const PHONE_NUMBER = "+91 8287636079";

const RightActions = () => (
  <div className="flex items-center gap-3">
    {/* Desktop/tablet: animated shiny phone number */}
    <div className="rounded-full md:px-10 py-3 bg-black cursor-pointer md:flex hidden  items-center text-white font-bold text-base shadow hover:text-black transition-colors">
      <ShinyText
        icon={<PhoneCall className="w-5 h-5" />}
        text={PHONE_NUMBER}
        disabled={false}
        speed={2}
        className="custom-class"
      />
    </div>
    {/* Mobile: clickable phone button, with better contrast */}
    <a
      href={`tel:${PHONE_NUMBER.replace(/\s+/g, "")}`}
      className="md:hidden block p-2 bg-white rounded-full shadow"
      aria-label="Call us"
    >
      <PhoneCall className="w-6 h-6 text-gray-600" />
    </a>
  </div>
);

export default RightActions;
