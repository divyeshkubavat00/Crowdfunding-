import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaWhatsapp, FaBloggerB, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#4663ac] text-black py-10 px-5 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-bold mb-4">CONTACT US</h3>
          <p>General Enquiry</p>
          <p>Email: info@impactguru.com</p>
          <p>Phone: 18008912903</p>
          <p className="text-sm">(Toll-free number for Indian residents)</p>
          <button className="mt-4 px-4 py-2 bg-white text-black rounded-full font-bold hover:bg-gray-300 transition">
            Raise A Concern
          </button>
        </div>

        {/* About Us */}
        <div>
          <h3 className="text-lg font-bold mb-4">ABOUT US</h3>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Team</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Resources</li>
            <ul className="ml-4">
              <li>• English</li>
              <li>• Hindi</li>
            </ul>
            <li>Press & Awards</li>
            <li>Contact Us</li>
            <li>Bug Bounty</li>
          </ul>
        </div>

        {/* Learn */}
        <div>
          <h3 className="text-lg font-bold mb-4">LEARN</h3>
          <ul className="space-y-2">
            <li>What is Crowdfunding?</li>
            <li>Fundraising Ideas</li>
            <li>Fundraising Tips</li>
            <li>Frequently Asked Questions</li>
            <li>Pricing & Fees</li>
            <li>Trust & Safety</li>
          </ul>
        </div>

        {/* Top Categories */}
        <div>
          <h3 className="text-lg font-bold mb-4">TOP CATEGORIES</h3>
          <ul className="space-y-2">
            <li>Medical Crowdfunding</li>
            <li>Transplant Crowdfunding</li>
            <li>Cancer Crowdfunding</li>
            <li>Child Health Crowdfunding</li>
            <li>NGO Crowdfunding</li>
            <li>Education Crowdfunding</li>
            <li>Emergency Crowdfunding</li>
          </ul>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="mt-8 text-center">
        <h3 className="text-lg font-bold mb-2">FOLLOW US ON</h3>
        <div className="flex justify-center space-x-4 text-xl">
        <FaFacebookF className="hover:text-[#1877F2] transition" />
          <FaTwitter className="hover:text-[#1DA1F2] transition" />
          <FaLinkedinIn className="hover:text-[#0077B5] transition" />
          <FaYoutube className="hover:text-[#FF0000] transition" />
          <FaWhatsapp className="hover:text-[#25D366] transition" />
          <FaBloggerB className="hover:text-[#FF5722] transition" />
          <FaInstagram className="hover:text-[#E4405F] transition" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;