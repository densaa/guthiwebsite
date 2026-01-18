import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0a3566] text-white text-sm">
      <div className=" mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* About / Guthi Institution */}
        <div className="md:col-span-1">
          <h3 className="text-lg font-semibold mb-3">Guthi Institution</h3>
          <p className="text-gray-200 leading-relaxed">
            Guthi Sansthan is committed to preserving Nepal’s cultural heritage,
            managing festivals, temples, and community resources.
          </p>

          {/* Follow Us Label */}
          <h4 className="mt-5 mb-2 font-semibold">Follow Us:</h4>
          <div className="flex gap-4 text-base">
            <FaInstagram className="hover:text-gray-300 cursor-pointer" />
            <FaFacebookF className="hover:text-gray-300 cursor-pointer" />
            <FaTwitter className="hover:text-gray-300 cursor-pointer" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-200">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Gallery</li>
            <li className="hover:text-white cursor-pointer">News & Article</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Officials + Contact Info */}
        <div className="md:col-span-2">
          

          {/* Officials Grid */}
          <div className="w-full grid grid-cols-2 gap-2 md:gap-4 lg:gap-6">

            {/* Official 1 */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <img
                alt="Janak Pokhrel"
                src="https://api.guthisansthan.org.np/media/footer_contacts/जनक.jpg"
                className="w-28 h-24 md:w-32 md:h-28 lg:w-36 lg:h-32 object-cover rounded-sm mb-3 aspect-square"
              />
              <h2 className="mb-1 text-[13px] md:text-[16px] font-semibold">Janak Pokhrel</h2>
              <h3 className="text-[12px] md:text-[14px] font-extralight mb-2">
                 <span>Head Legal Officer</span> <br />
                 <span>(Spokesperson)</span>
              </h3>
              <p className="flex gap-1 md:gap-2 text-[11px] md:text-[14px] font-extralight break-all items-center">
                <FaPhoneAlt className="w-3 h-3 md:w-4 md:h-4" /> 9849-044780
              </p>
            </div>

            {/* Official 2 */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <img
                alt="Shalik Ram Subedi"
                src="https://api.guthisansthan.org.np/media/footer_contacts/salik_sir.jpg"
                className="w-28 h-24 md:w-32 md:h-28 lg:w-36 lg:h-32 object-cover rounded-sm mb-3 aspect-square"
              />
              <h2 className="mb-1 text-[13px] md:text-[16px] font-semibold">Shalik Ram Subedi</h2>
              <h3 className="text-[12px] md:text-[14px] font-extralight mb-2">
                 <span>Senior Divisional Engineer</span> <br />
                 <span>(Information Officer)</span>
              </h3>
              <p className="flex gap-1 md:gap-2 text-[11px] md:text-[14px] font-extralight break-all items-center">
                <FaPhoneAlt className="w-3 h-3 md:w-4 md:h-4" /> 9851125812
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-6">
            <h1 className="text-[18px] md:text-[22px] font-semibold mb-2">Contact Info</h1>

            <p className="flex gap-3 my-2 text-[14px] md:text-[16px] items-center">
              <FaMapMarkerAlt /> Location: Guthi Sansthan, Kathmandu, Nepal
            </p>
            <p className="flex gap-3 my-2 text-[14px] md:text-[16px] items-center">
              <FaPhoneAlt /> Contact: 01-4248603, 01-4253941, 01-4253859, 01-4256141
            </p>
            <p className="flex gap-3 my-2 text-[14px] md:text-[16px] items-center">
              <FaEnvelope />
              <span className="flex flex-col">
               guthisansthan2021@gmail.com <br />
               guthi.sansthan@gmail.com <br />
               info@guthisansthan.org.np
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar – Increased height */}
      <div className="bg-[#072a52] text-center py-6 text-xs md:text-sm text-gray-300">
        © 2023 Guthi Institution. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
