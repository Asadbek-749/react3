import HeroBG from "../assets/images/img/hero-bg.png";

function Header() {
  return (
    <header className="container mx-auto mt-13.5 mb-23.75 grid grid-cols-2 items-center gap-10">
      <div>
        <p className="font-hind font-medium text-[16px] leading-[100%] tracking-[0.145em] uppercase text-[#C72535]">
          Favorite brands
        </p>
        <h1 className="font-hind font-semibold text-[61px] leading-[73.2px] tracking-[0%] mb-7">
          <span className="text-[#3f32cb]">An exciting place</span> for the whole
          family to shop.
        </h1>
        <p className="font-hind font-normal text-[20px] leading-6.75 tracking-[0%] text-[#030D15] mb-9">
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced
          below for those interested.
        </p> 
        <button className="py-4 px-9 bg-[#247CC0] text-white uppercase cursor-pointer">Shop Now</button>
      </div>

      <div>
        <img src={HeroBG} alt="Hero Background" />
      </div>
    </header>
  );
}

export default Header;
