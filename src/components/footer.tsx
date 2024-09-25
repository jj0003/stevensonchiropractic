import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-500 text-white py-10 px-10 text-left rounded-t-lg">
      {/* Footer Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Clinic Name at the Top Left */}
        <div className="col-span-1 md:col-span-1">
          <h2 className="satoshi-bold text-xl mb-2">
            Stevenson Chiropractic and Podiatry Clinic
          </h2>
        </div>

        {/* Column 1: Address */}
        <div className="col-span-1">
          <h3 className="satoshi-bold text-lg mb-2">Address</h3>
          <a
            href="https://www.google.com/maps?q=179+Brunker+Road,+Adamstown+NSW+2289+Australia"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0049FF]"
          >
            <p>179 Brunker Road,</p>
            <p>Adamstown NSW 2289</p>
            <p>Australia</p>
          </a>
        </div>

        {/* Column 2: Contact */}
        <div className="col-span-1">
          <h3 className="satoshi-bold text-lg mb-2">Contact</h3>
          <a href="tel:+61249561144" className="hover:text-[#0049FF]">
            <p>p: (02) 4956 1144</p>
          </a>
          <a href="fax:+61249527461" className="hover:text-[#0049FF]">
            <p>f: (02) 4952 7461</p>
          </a>
          <a
            href="mailto:fas@stevensonchiropractic.com.au"
            className="hover:text-[#0049FF]"
          >
            <p>fas@stevensonchiropractic.com.au</p>
          </a>
        </div>

        {/* Column 3: Opening Hours */}
        <div className="col-span-1">
          <h3 className="satoshi-bold text-lg mb-2">Opening Hours</h3>
          <p>Monday: 8:30am – 6pm</p>
          <p>Tuesday: 8:30am – 6pm</p>
          <p>Wednesday: 8:30am – 6pm</p>
          <p>Thursday: Closed</p>
          <p>Friday: 8:30am – 12pm</p>
          <p>Weekends and Public Holidays: Closed</p>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-10 flex flex-col md:flex-row justify-between items-center text-sm">
        {/* Copyright */}
        <p>© Stevenson Chiropractic and Podiatry Clinic 2024</p>

        {/* Links */}
        <div className="mt-4 md:mt-0">
          <Link href="/terms-and-conditions" className="hover:text-[#0049FF]">
            Terms & Conditions
          </Link>{" "}
          |{" "}
          <Link href="/privacy-policy" className="hover:text-[#0049FF]">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
