import React from "react";
import Kalonka from "../assets/images/img/kalonka.png"


// const services = [
//   {
//     id: 1,
//     title: "Ремонт",
//     highlight: "аудио техники",
//     description:
//       "Мы выполняем качественный ремонт аудиотехники, включая колонки, усилители и прочее оборудование, выдаем гарантию и имеем необходимые запчасти в наличие",
//     image: {Kalonka},
//     imagePosition: "right",
//   },
//   {
//     id: 2,
//     title: "Ремонт",
//     highlight: "фото/видео техники",
//     description:
//       "Осуществляем ремонт современной цифровой фото и видео аппарата, проводимый первоклассными инженерами",
//     image: "./src./assets./images./img./kalonka.png",
//     imagePosition: "left",
//   },
//   {
//     id: 3,
//     title: "Ремонт",
//     highlight: "телефонов",
//     description:
//       "Мы предоставляем полный спектр услуг по обслуживанию и ремонту мобильных устройств марки Apple",
//     image: {Kalonka},
//     imagePosition: "right",
//   },
//   {
//     id: 4,
//     title: "Ремонт",
//     highlight: "электротранспорта",
//     description:
//       "Осуществляем ремонт электровелосипедов, сегвеев, моноколес, электросамокатов, гироскутеров и пр.",
//     image: {Kalonka},
//     imagePosition: "left",
//   },
//   {
//     id: 5,
//     title: "Ремонт",
//     highlight: "телевизоров",
//     description:
//       "Сервисный центр Krepair выполнит профессиональный ремонт телевизоров любых марок и моделей",
//     image: {Kalonka},
//     imagePosition: "right",
//   },
// ];

const Serves = () => {
  // const [hovered, setHovered] = useState(null);
  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-12 px-6 gap-20">
        <div
          className={`w-full max-w-4xl flex items-center gap-12 ${
            service.imagePosition === "left" ? "flex-row-reverse" : "flex-row"
          }`}
        >
          <div className="flex-1 flex flex-col gap-4">
            <h2 className="text-3xl font-bold text-gray-900 leading-tight">
              {service.title}{" "}
              <span className="text-red-500">{service.highlight}</span>
            </h2>
            <p className="text-gray-500 text-base leading-relaxed max-w-xs">
              {service.description}
            </p>
            <button
              className={`mt-1 w-fit px-7 py-2.5 border border-gray-800 rounded text-sm font-medium transition-all duration-200 ${
                hovered === service.id
                  ? "bg-gray-900 text-white"
                  : "bg-transparent text-gray-900"
              }`}
            >
              Подробнее
            </button>
          </div>

          <div
            className={`shrink-0 w-72 h-52 flex items-center justify-center transition-transform duration-300 ${
              hovered === service.id ? "scale-105" : "scale-100"
            }`}
          >
            <img
              src={service.image}
              alt={service.highlight}
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </div>
        </div>
    </div>
  );
};

export default Serves;
