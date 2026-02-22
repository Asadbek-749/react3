import React from "react";
import HeroBg from "../assets/images/img/hero-bg.png";

const Hero = () => {
  return (
    <section className="w-full mt-8 sm:mt-10 md:mt-12 lg:mt-16 xl:mt-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-0 max-w-[1280px] mx-auto">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-10 lg:gap-12 xl:gap-16">
        <div className="flex flex-col text-center lg:text-left items-center lg:items-start w-full lg:w-1/2 xl:w-[55%]">
          <h1
            className="font-bold 
            text-[28px] 
            xs:text-[32px] 
            sm:text-[38px] 
            md:text-[44px] 
            lg:text-[48px] 
            xl:text-[54px] 
            leading-[1.15] 
            tracking-[-0.05em] 
            uppercase 
            text-black"
          >
            Сервисный центр
          </h1>

          <p
            className="mt-3 sm:mt-4 md:mt-5 
            font-medium 
            text-[16px] 
            sm:text-[18px] 
            md:text-[20px] 
            lg:text-[22px] 
            xl:text-[25px] 
            leading-normal 
            tracking-[-0.04em] 
            text-[#817979]"
          >
            по ремонту техники в Москве
          </p>

          
          <div className="mt-7 sm:mt-8 md:mt-9 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 sm:gap-4 w-full sm:w-auto lg:w-full xl:w-auto">
            <button
              className="
              cursor-pointer 
              px-6 sm:px-8 md:px-10 
              py-3.5 sm:py-4 md:py-[18px] 
              bg-[#F03957] 
              hover:bg-[#d8334e] 
              active:bg-[#c02a42]
              transition-all 
              duration-200
              rounded-[10px] 
              font-semibold 
              text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] 
              text-white 
              shadow-lg
              whitespace-nowrap
              w-full sm:w-auto
            "
            >
              Получить консультацию
            </button>

            <button
              className="
              cursor-pointer 
              px-6 sm:px-8 md:px-10 
              py-3.5 sm:py-4 md:py-[18px] 
              bg-white 
              border border-gray-200 
              hover:border-[#F03957] 
              active:border-[#d8334e]
              transition-all 
              duration-200
              rounded-[10px] 
              font-semibold 
              text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] 
              text-black
              whitespace-nowrap
              w-full sm:w-auto
            "
            >
              Смотреть прайс-лист
            </button>
          </div>
        </div>


        <div className="w-full lg:w-1/2 xl:w-[45%] flex justify-center lg:justify-end">
          <img
            src={HeroBg}
            alt="Hero Background"
            className="
              w-full 
              max-w-[280px] 
              xs:max-w-[340px]
              sm:max-w-[420px] 
              md:max-w-[480px] 
              lg:max-w-[520px] 
              xl:max-w-[600px] 
              h-auto 
              object-contain
              drop-shadow-xl
            "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
