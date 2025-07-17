import React from "react";

function Footer() {
  return (
    <footer className="w-full py-6 bg-sec text-white text-center font-[var(--font-poppins)]">
      <div className="container mx-auto">
        <p className="text-sm">&copy; {new Date().getFullYear()} Hikewike. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
