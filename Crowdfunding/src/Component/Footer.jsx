import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaWhatsapp, FaBloggerB, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#4663ac] text-black py-10 px-5 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-bold mb-4">CONTACT US</h3>
          <p>General Enquiry</p>
          <p>Email: demo@gmail.com</p>
          <p>Phone: 2562486290</p>
          <p className="text-sm">(Toll-free number for Indian residents)</p>
          <button className="mt-4 px-4 py-2 bg-white text-black rounded-full font-bold hover:bg-gray-300 transition">
            Raise A Concern
          </button>
        </div>

        {/* About Us */}
        <div>
          <h3 className="text-lg font-bold mb-4">ABOUT US</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline hover:decoration-white transition duration-300">About Us</a></li>
            <li><a href="#" className="hover:underline hover:decoration-white transition duration-300">Team</a></li>
            <li><a href="#" className="hover:underline hover:decoration-white transition duration-300">Careers</a></li>
            <li><a href="#" className="hover:underline hover:decoration-white transition duration-300">Blog</a></li>
            <li><a href="#" className="hover:underline hover:decoration-white transition duration-300">Resources</a></li>
            <ul className="ml-4">
              <li><a href="#" className="hover:underline hover:decoration-white transition duration-300">• English</a></li>
              <li><a href="#" className="hover:underline hover:decoration-white transition duration-300">• Hindi</a></li>
            </ul>
            <li><a href="#" className="hover:underline hover:decoration-white transition duration-300">Press & Awards</a></li>
            <li><a href="#" className="hover:underline hover:decoration-white transition duration-300">Contact Us</a></li>
            <li><a href="#" className="hover:underline hover:decoration-white transition duration-300">Bug Bounty</a></li>
          </ul>
        </div>

        {/* Learn */}
        <div>
          <h3 className="text-lg font-bold mb-4">LEARN</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline hover:decoration-white transition duration-300">What is Crowdfunding?</a></li>
            <li><a href="#" className="hover:underline hover:decoration-white transition duration-300">Fundraising Ideas</a></li>
            <li><a href="#" className="hover:underline hover:decoration-white transition duration-300">Fundraising Tips</a></li>
            <li><a href="#" className="hover:underline hover:decoration-white transition duration-300">Frequently Asked Questions</a></li>
            <li><a href="#" className="hover:underline hover:decoration-white transition duration-300">Pricing & Fees</a></li>
            <li><a href="#" className="hover:underline hover:decoration-white transition duration-300">Trust & Safety</a></li>
          </ul>
        </div>

        {/* Top Categories */}
        <div>
          <h3 className="text-lg font-bold mb-4">TOP CATEGORIES</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline hover:decoration-white transition duration-300">Medical Crowdfunding</a></li>
            <li><a href="#" className="hover:underline hover:decoration-white transition duration-300">Transplant Crowdfunding</a></li>
            <li><a href="#" className="hover:underline hover:decoration-white transition duration-300">Cancer Crowdfunding</a></li>
            <li><a href="#" className="hover:underline hover:decoration-white transition duration-300">Child Health Crowdfunding</a></li>
            <li><a href="#" className="hover:underline hover:decoration-white transition duration-300">NGO Crowdfunding</a></li>
            <li><a href="#" className="hover:underline hover:decoration-white transition duration-300">Education Crowdfunding</a></li>
            <li><a href="#" className="hover:underline hover:decoration-white transition duration-300">Emergency Crowdfunding</a></li>
          </ul>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="mt-8 text-center">
        <h3 className="text-lg font-bold mb-2">FOLLOW US ON</h3>
        <div className="flex justify-center space-x-4 text-xl">
          <FaFacebookF className="hover:text-[#1877F2] transition duration-300" />
          <FaTwitter className="hover:text-[#1DA1F2] transition duration-300" />
          <FaLinkedinIn className="hover:text-[#0077B5] transition duration-300" />
          <FaYoutube className="hover:text-[#FF0000] transition duration-300" />
          <FaWhatsapp className="hover:text-[#25D366] transition duration-300" />
          <FaBloggerB className="hover:text-[#FF5722] transition duration-300" />
          <FaInstagram className="hover:text-[#E4405F] transition duration-300" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
