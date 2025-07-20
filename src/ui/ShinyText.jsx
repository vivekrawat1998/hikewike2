import React from "react";

const ShinyText = ({
  text,
  icon = null,
  disabled = false,
  speed = 5,
  className = "",
  ...props
}) => {
  const animationDuration = `${speed}s`;

  return (
    <span
      className={`text-white bg-clip-text  inline-flex items-center ${
        disabled ? "" : "animate-shine"
      } ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(120deg, transparent 40%, #f36f25 50%, transparent 60%)",
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        color: "white",
        animationDuration,
      }}
      {...props}
    >
      {icon && <span className="mr-1">{icon}</span>}
      {text}
    </span>
  );
};

export default ShinyText;
