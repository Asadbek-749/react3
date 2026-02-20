import Logo from "../assets/images/svg/footer-logo.svg";

function Footer() {
  return (
    <footer className="bg-[#030D15] text-white py-10 mt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-5 justify-between items-start gap-8">
          <div className="mb-4 md:mb-0">
            <img src={Logo} alt="Company Logo" className="h-16.5 mb-2" />
            <p className="text-[14px] opacity-80 font-hind mt-4">
              STORE - worldwide fashion store since 1978. <br /> We sell over
              1000+ branded products on <br /> our web-site.
            </p>
          </div>
          <div>
            <h3 href="#" className="font-['Hind_Siliguri'] font-semibold text-[16px] leading-[100%] tracking-normal text-white">
              INFORMATION
            </h3>

            <ul className="mt-7">
              <li>
                <a href="#" className="text-[14px] opacity-80 font-hind" >New Collection</a>
              </li>
              <li>
                <a href="#" className="text-[14px] opacity-80 font-hind" >About Store</a>
              </li>
              <li>
                <a href="#" className="text-[14px] opacity-80 font-hind" >Contact Us</a>
              </li>
              <li>
                <a href="#" className="text-[14px] opacity-80 font-hind" >Latest News</a>
              </li>
              <li>
                <a href="#" className="text-[14px] opacity-80 font-hind" >Our Sitemap</a>
              </li>
              <li>
                <a href="#" className="text-[14px] opacity-80 font-hind" >Orders History</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 href="#" className="font-['Hind_Siliguri'] font-semibold text-[16px] leading-[100%] tracking-normal text-white">
              FOOTER MENU
            </h3>

            <ul className="mt-7">
              <li>
                <a href="#" className="text-[14px] opacity-80 font-hind" >Instagram profile</a>
              </li>
              <li>
                <a href="#" className="text-[14px] opacity-80 font-hind" >New Collection</a>
              </li>
              <li>
                <a href="#" className="text-[14px] opacity-80 font-hind" >Contact Us</a>
              </li>
              <li>
                <a href="#" className="text-[14px] opacity-80 font-hind" >Latest News</a>
              </li>
              <li>
                <a href="#" className="text-[14px] opacity-80 font-hind" >Terms & Conditions</a>
              </li>
              <li>
                <a href="#" className="text-[14px] opacity-80 font-hind" >Purchase Theme</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 href="#" className="font-['Hind_Siliguri'] font-semibold text-[16px] leading-[100%] tracking-normal text-white">
              USEFUL LINKS
            </h3>

            <ul className="mt-7">
              <li>
                <a href="#" className="text-[14px] opacity-80 font-hind" >Instagram profile</a>
              </li>
              <li>
                <a href="#" className="text-[14px] opacity-80 font-hind" >New Collection</a>
              </li>
              <li>
                <a href="#" className="text-[14px] opacity-80 font-hind" >Contact Us</a>
              </li>
              <li>
                <a href="#" className="text-[14px] opacity-80 font-hind" >Latest News</a>
              </li>
              <li>
                <a href="#" className="text-[14px] opacity-80 font-hind" >Terms & Conditions</a>
              </li>
              <li>
                <a href="#" className="text-[14px] opacity-80 font-hind" >Purchase Theme</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 href="#" className="font-['Hind_Siliguri'] font-semibold text-[16px] leading-[100%] tracking-normal text-white">
              ABOUT THE STORE
            </h3>

            <p className="text-[14px] opacity-80 font-hind mt-7">
              STORE - worldwide fashion store since 1978. <br /> We sell over
              1000+ branded products on <br /> our web-site.
            </p>

            <div>
                
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
