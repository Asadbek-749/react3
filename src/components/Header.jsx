import React, { useState } from "react";
import Logo from "../assets/images/svg/logo_krepair.svg";
import BurgerBtn from "../assets/images/svg/burger-btn.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <nav className="mx-auto w-full px-4 sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1161px] flex justify-between items-center mt-6 relative">
  
        <div>
          <img src={Logo} alt="Logo" />
        </div>

        <ul className="hidden md:flex justify-between gap-10">
          {["Услуги", "Прайс-лист", "О компании", "Контакты"].map(
            (item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="font-inter font-normal text-[18px] leading-[175%] tracking-[-0.05em] text-[#2E3235] transition-all duration-300 hover:text-[#FF5924] hover:tracking-[-0.02em]"
                >
                  {item}
                </a>
              </li>
            ),
          )}
        </ul>

      
        <div className="hidden md:flex justify-between gap-10">
          <a
            href="tel:+74992262928"
            className="font-inter font-bold text-[20px] leading-[175%] tracking-[-0.05em] text-[#2E3235] transition-all duration-300 hover:text-[#FF5924] hover:tracking-[-0.02em]"
          >
            +7 499 226 29 28
          </a>
        </div>

        <div className="block md:hidden">
          <img
            src={BurgerBtn}
            alt="menu"
            className="cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>

  
        {menuOpen && (
          <ul className="absolute top-full left-0 w-full bg-white flex flex-col gap-4 p-6 md:hidden shadow-lg z-50">
            {["Услуги", "Прайс-лист", "О компании", "Контакты"].map(
              (item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="font-inter font-normal text-[18px] leading-[175%] tracking-[-0.05em] text-[#2E3235] transition-all duration-300 hover:text-[#FF5924] hover:tracking-[-0.02em]"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ),
            )}

            
            <li>
              <a
                href="tel:+74992262928"
                className="font-inter font-bold text-[20px] leading-[175%] tracking-[-0.05em] text-[#2E3235] transition-all duration-300 hover:text-[#FF5924] hover:tracking-[-0.02em]"
              >
                +7 499 226 29 28
              </a>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Header;
