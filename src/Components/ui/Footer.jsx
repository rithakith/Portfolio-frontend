import React from "react";

const Footer = () => {
  return (
    <footer className="py-8 -z-50">
      {/* Bottom Text */}
      <div className="text-center text-colors-pink-1 mt-6 mx-4 sm:mx-12 lg:mx-56 border-t border-colors-pink-1 pt-6">
        <p>&copy; {new Date().getFullYear()} Rithara Kithmanthie. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
