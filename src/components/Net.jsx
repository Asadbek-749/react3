import React from "react";

const Products = [
  {
    id: 1,
    name: "iOS Mouse",
    price: "$ 249.99",
    img: "/src/assets/images/img/Rectangle85.png",
  },
  {
    id: 2,
    name: "Black iPhone Speaker",
    price: "$ 249.99",
    img: "/src/assets/images/img/Rectangle86.png",
  },
  {
    id: 3,
    name: "iOS Keyboard",
    price: "$ 249.99",
    img: "/src/assets/images/img/87.png",
  },
  {
    id: 4,
    name: "Mackbook Pro",
    price: "$ 249.99",
    img: "/src/assets/images/img/Rectangle90.png",
  },
  {
    id: 5,
    name: "Black Headphone",
    price: "$ 249.99",
    img: "/src/assets/images/img/Rectangle89.png",
  },
  {
    id: 6,
    name: "iPhone Speaker",
    price: "$ 249.99",
     img: "/src/assets/images/img/Rectangle88.png",
  },
];

function Product() {
  return (
    <div className="container mx-auto mt-10 px-4">
      <div className="flex flex-wrap justify-center gap-6">
        {Products.map((item) => (
          <div
            key={item.id}
            className="w-[360px] h-[503px] border border-[#0000001A] flex flex-col items-center p-6 bg-white 
                hover:shadow-lg hover:translate-y-1 transition-transform duration-300 cursor-pointer">
          
            <div className="w-full h-[320px] overflow-hidden flex items-center justify-center bg-white">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="mt-8 text-center">
              <h3 className="font-hindSiliguri font-semibold text-[25px] leading-[100%] tracking-[0%] text-[#1A1A1A]">
                {item.name}
              </h3>
              <p className="mt-4 font-hind font-semibold text-[18px] leading-[1.2] text-[#C72535]">
                {item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
