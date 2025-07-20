import React from "react";
import { Search } from "lucide-react";
import RotatingText from "../ui/Rotatingtext";

const Hero = () => {
  return (
    <div className="relative w-full grid place-items-center h-[80vh] text-white overflow-hidden">
      {/* Background Video */}
      <video
        style={{ objectPosition: "top" }}
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://res.cloudinary.com/dpaxvc4xw/video/upload/v1753010320/19068486-uhd_3840_2160_25fps_iqmc0o.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      {/* <img
        src="/DSC_7240 (1).JPG"
        alt=""
        className="w-full h-full object-"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0  z-10 bg-black/20" />
      {/* Foreground Content */}
      <div className="absolute z-20 flex flex-col mt-20  items-center justify-center h-full w-full text-center px-4">
        <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-parkinsans font-bold mb-4 drop-shadow-lg">
          Where Every Journey Begins with
        </h1>

        <RotatingText
          texts={[
            `${'"'}Curiosity ${'"'}`,
            `${'"'}Nature ${'"'}`,
            `${'"'} Adventure ${'"'}`,
            `${'"'} Connection ${'"'}`,
            `${'"'} Purpose ${'"'}`,
            `${'"'} You ${'"'}`,
          ]}
          mainClassName="px-2 text-3xl sm:text-4xl -mt-3  text-white lg:text-[48px] font-bold font-parkinsans  text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-3xl"
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={3000}
        />
      </div>
    </div>
  );
};

export default Hero;
