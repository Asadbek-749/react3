import React, { useState } from "react";
import Kalonka from "../assets/images/img/kalonka.png";
import Camera from "../assets/images/img/camera.png";
import Telefon from "../assets/images/img/telefon.png";
import Skuter from "../assets/images/img/giroskuter.png";
import Manitor from "../assets/images/img/manitor.png";

const services = [
  {
    id: 1,
    title: "Ремонт",
    highlight: "аудио техники",
    description:
      "Мы выполняем качественный ремонт аудиотехники, включая колонки, усилители и прочее оборудование, выдаем гарантию и имеем необходимые запчасти в наличие",
    image: Kalonka,
    imagePosition: "right",
  },
  {
    id: 2,
    title: "Ремонт",
    highlight: "фото/видео техники",
    description:
      "Осуществляем ремонт современной цифровой фото и видео аппарата, проводимый первоклассными инженерами",
    image: Camera,
    imagePosition: "left",
  },
  {
    id: 3,
    title: "Ремонт",
    highlight: "телефонов",
    description:
      "Мы предоставляем полный спектр услуг по обслуживанию и ремонту мобильных устройств марки Apple",
    image: Telefon,
    imagePosition: "right",
  },
  {
    id: 4,
    title: "Ремонт",
    highlight: "электротранспорта",
    description:
      "Осуществляем ремонт электровелосипедов, сегвеев, моноколес, электросамокатов, гироскутеров и пр.",
    image: Skuter,
    imagePosition: "left",
  },
  {
    id: 5,
    title: "Ремонт",
    highlight: "телевизоров",
    description:
      "Сервисный центр Krepair выполнит профессиональный ремонт телевизоров любых марок и моделей",
    image: Manitor,
    imagePosition: "right",
  },
];

const Serves = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="bg-[#525252]">
      <div className="container mx-auto mt-40 flex justify-between items-center pt-20">
        <h2 className="font-['Montserrat'] font-bold text-[45px] leading-[175%] tracking-[-0.05em] uppercase text-[#F7F5F5]">
          Наши услуги <br /> <span className="text-red-700"> для вас</span>
        </h2>
        <p className="font-['Inter'] font-semibold text-[18px] leading-[1.75] tracking-[-0.05em] text-[#F7F5F5]">
          Наша компания оказывает полный спектр услуг, имеет <br /> надежную
          репутация, и успела завоевать доверие и <br /> расположение своих
          клиентов{" "}
        </p>
      </div>
      <div className="min-h-screen bg-[#525252] flex flex-col items-center pt-12 px-6 gap-20">
        {services.map((item) => (
          <div
            key={item.id}
            onMouseEnter={() => setHovered(item.id)}
            onMouseLeave={() => setHovered(null)}
            className={`w-full container flex items-center justify-between gap-12 border border-gray-200 py-15 px-8 rounded-2xl bg-[#ffffff] ${
              item.imagePosition === "left" ? "flex-row-reverse justify-between" : "flex-row " 
            }`}
          >
    
            <div className="flex-1 flex flex-col gap-4 ">
              <h2 className="text-3xl font-bold text-gray-900 leading-tight">
                {item.title}{" "}
                <span className="text-red-500">{item.highlight}</span>
              </h2>
              <p className="text-gray-500 text-base leading-relaxed max-w-xs mt-6.2 mb-6.2 5">
                {item.description}
              </p>
              <button
                className={`mt-7.5 w-fit px-7 py-2.5 border border-gray-800 rounded text-sm font-medium transition-all duration-200 ${
                  hovered === item.id
                    ? "bg-gray-900 text-white"
                    : "bg-transparent text-gray-900"
                }`}
              >
                Подробнее
              </button>
            </div>

            <div
              className={`shrink-0 w-72 h-52 flex items-center justify-center transition-transform duration-300 ${
                hovered === item.id ? "scale-105" : "scale-100"
              }`}
            >
              <img
                src={item.image}
                alt={item.highlight}
                className="w-full h-full  object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Serves;