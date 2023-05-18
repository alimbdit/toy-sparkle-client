import { Link } from "react-router-dom";
import toys from "../../../../public/toys.png";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaMobile,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="p-10 bg-neutral-800 text-white ">
      <div className="footer items-center">
        
        <div className="">
          <div className="mb-5">
            <div className="flex justify-center">
              <img className="w-16" src={toys} alt="" />
            </div>
            <div className="text-2xl lg:text-5xl font-extrabold">
              <span className="text-emerald-500">Toy</span>
              <span className="text-orange-500 ">Sparkle</span>
            </div>
          </div>
          <div>
            {/* <p className="text-base mb-3 text-emerald-100">
            Indulge in captivating toys at ToySparkle. <br /> Ignite
            imagination, explore wonder, and find <br /> joy in our enchanting
            collection.
          </p> */}
            <span className="text-emerald-100 flex items-center mb-2 gap-1 text-base">
              <FaMapMarkerAlt className="text-orange-200" /> Address: 350 Fifth
              Avenue, London
            </span>
            <span className="text-emerald-100 flex items-center my-2 gap-1 text-base">
              <FaEnvelope className="text-orange-200" /> Email:
              support@toysparkle.com
            </span>
            <span className="text-emerald-100 flex items-center my-2 gap-1 text-base">
              <FaMobile className="text-orange-200" /> Phone :+(1234) 567 890
            </span>
            <div className="mt-5 space-x-4">
              <Link
                to="https://www.facebook.com/"
                className="border cursor-pointer hover:border-emerald-300 rounded-full inline-block "
              >
                <FaFacebookF className="text-lg hover:text-emerald-300 text-emerald-100 m-2" />
              </Link>
              <Link
                to="https://twitter.com/"
                className="border cursor-pointer hover:border-emerald-300 rounded-full inline-block "
              >
                <FaTwitter className="text-lg hover:text-emerald-300 text-emerald-100 m-2" />
              </Link>
              <Link
                to="https://www.instagram.com/"
                className="border cursor-pointer hover:border-emerald-300 rounded-full inline-block "
              >
                <FaInstagram className="text-lg hover:text-emerald-300 text-emerald-100 m-2" />
              </Link>
              <Link
                to="https://www.youtube.com/"
                className="border cursor-pointer hover:border-emerald-300 rounded-full inline-block "
              >
                <FaYoutube className="text-lg hover:text-emerald-300 text-emerald-100 m-2" />
              </Link>
            </div>
          </div>
        </div>
        <div>
          <span className="footer-title text-lg">services</span>
          <Link to="/" className="link link-hover text-base text-emerald-100">
            Specials
          </Link>
          <Link to="/" className="link link-hover text-base text-emerald-100">
            New Products
          </Link>
          <Link to="/" className="link link-hover text-base text-emerald-100">
            Top Sellers
          </Link>
          
          <Link to="/" className="link link-hover text-base text-emerald-100">
            Contact Us
          </Link>
          <Link to="/" className="link link-hover text-base text-emerald-100">
            About Us
          </Link>
        </div>
        <div>
          <span className="footer-title text-lg">Company</span>
          <Link to="/" className="link link-hover text-base text-emerald-100">
            Checkout
          </Link>
          <Link to="/" className="link link-hover text-base text-emerald-100">
            My Account
          </Link>
          <Link to="/" className="link link-hover text-base text-emerald-100">
            My Orders
          </Link>
          <Link to="/" className="link link-hover text-base text-emerald-100">
            Our Stores
          </Link>
          
          <Link to="/" className="link link-hover text-base text-emerald-100">
            My Personal Info
          </Link>
        </div>
        <div>
          <span className="footer-title text-lg">Legal</span>
          <Link to="/" className="link link-hover text-base text-emerald-100">
          Support
          </Link>
          <Link to="/" className="link link-hover text-base text-emerald-100">
          Helpline
          </Link>
          <Link to="/" className="link link-hover text-base text-emerald-100">
          Event
          </Link>
          <Link to="/" className="link link-hover text-base text-emerald-100">
            My Credit Slips
          </Link>
          <Link to="/" className="link link-hover text-base text-emerald-100">
            My Addresses
          </Link>
          
        </div>
        <div>
          <p className="text-base mb-5 text-emerald-100">
            Indulge in captivating toys at ToySparkle. <br /> Ignite
            imagination, explore wonder, and find <br /> joy in our enchanting
            collection.
          </p>
          <div className="flex flex-col gap-3 w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-base text-white px-4 py-2 rounded">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-neutral-600 my-7"></div>
      <div className="text-center -mb-3">Copyright © 2023 ToySparkle.com. All rights reserved</div>
    </footer>
  );
};

export default Footer;
