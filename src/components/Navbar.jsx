import Logo from "../assets/images/svg/logo.svg";
import SearchIcon from "../assets/images/svg/sreach.svg";
import BugIcon from "../assets/images/svg/bug.svg";
import UserchIcon from "../assets/images/svg/user.svg";

function Navbar() {
  return (
    <nav className="container mx-auto py-8.25 flex items-center justify-between">
      <div>
        <img src={Logo} alt="Logo" className="" />
      </div>

      <ul className="flex gap-10">
        <li>
          <a href="#" className="font-medium text-[14px] leading-[100%] tracking-[0%] uppercase">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="font-medium text-[14px] leading-[100%] tracking-[0%] uppercase">
            About
          </a>
        </li>
        <li>
          <a href="#" className="font-medium text-[14px] leading-[100%] tracking-[0%] uppercase">
            Product
          </a>
        </li>
        <li>
          <a href="#" className="font-medium text-[14px] leading-[100%] tracking-[0%] uppercase">
            blog
          </a>
        </li>
        <li>
          <a href="#" className="font-medium text-[14px] leading-[100%] tracking-[0%] uppercase">
            shop
          </a>
        </li>
        <li>
          <a href="#" className="font-medium text-[14px] leading-[100%] tracking-[0%] uppercase">
            Contact us
          </a>
        </li>
      </ul>

      <div className="flex gap-8">
        <img src={SearchIcon} alt="Search" className="w-5 h-5 cursor-pointer" />
        <img src={BugIcon} alt="Bug" className="w-5 h-5 cursor-pointer" />
        <img src={UserchIcon} alt="User" className="w-5 h-5 cursor-pointer" />
      </div>
    </nav>
  );
}

export default Navbar;
