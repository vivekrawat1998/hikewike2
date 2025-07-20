import React from "react";

export const navLinks = [
  // {
  //   label: "International Trips",
  //   icon: (
  //     <span role="img" aria-label="airplane" className="text-blue-700">
  //       🛫
  //     </span>
  //   ),
  //   to: "#",
  //   dropdown: true,
  // },
  // {
  //   label: "Domestic Trips",
  //   icon: (
  //     <span role="img" aria-label="india flag" className="text-yellow-600">
  //       🇮🇳
  //     </span>
  //   ),
  //   to: "#",
  //   dropdown: true,
  // },
  {
    label: "Weekend Trips",
    icon: (
      <span role="img" aria-label="car" className="text-pink-700">
        <img
          width="28"
          height="28"
          src="https://img.icons8.com/emoji/48/snow-capped-mountain.png"
          alt="snow-capped-mountain"
        />
      </span>
    ),
    to: "#",
  },
  {
    label: "Upcoming Trips",
    icon: (
      <span role="img" aria-label="luggage" className="">
        <img
          width="28"
          height="28"
          src="https://img.icons8.com/emoji/48/backpack-emoji.png"
          alt="backpack-emoji"
        />
      </span>
    ),
    to: "#",
  },
  {
    label: "Corporate Trips",
    icon: (
      <span
        role="img"
        aria-label="office"
        className="text-amber-800 text-[22px]"
      >
        <img
          width="28"
          height="28"
          src="https://img.icons8.com/emoji/48/office-building.png"
          alt="office-building"
        />
      </span>
    ),
    to: "#",
  },
  // {
  //   label: "Blogs",
  //   icon: (
  //     <span role="img" aria-label="blog" className="text-blue-700">
  //       📄
  //     </span>
  //   ),
  //   to: "#",
  // },
  {
    label: "WhatsApp Us",
    icon: (
      <span role="img" aria-label="whatsapp" className="text-green-600 text-sm">
        <img className="w-5 h-5" src="/whatsapp-color-svgrepo-com.svg" alt="" />
      </span>
    ),
    to: "https://wa.me/918287636079",
    external: true,
  },
];
