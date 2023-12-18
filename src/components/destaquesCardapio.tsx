"use client";
import React from "react";
import Slider from "react-slick";

const DestaquesCardapio = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-full mb-4">
      <h2 className="text-cardapio-title font-semibold text-xl mb-2">
        Destaques
      </h2>

      <Slider {...settings}>
        <div className="max-w-[168px] bg-white rounded-3xl">
          <div
            className="max-w-[168px] h-[168px] rounded-3xl mb-6 relative"
            style={{
              background: `url('/images/img.png') no-repeat center`,
              backgroundSize: "cover",
            }}
          >
            <div className="absolute -bottom-3 left-0 right-0 grid place-items-center">
              <p className="bg-orange-brand px-[12px] py-[8px] rounded-[56px] text-xs	text-white font-bold uppercase">
                Novidade
              </p>
            </div>
          </div>
          <div className="px-4 pb-6">
            <p className="text-cardapio-title  text-base mb-2">Hype Burguer</p>
            <p className="text-cardapio-title font-semibold">R$36,00</p>
          </div>
        </div>
        <div className="max-w-[168px] bg-white rounded-3xl">
          <div
            className="max-w-[168px] h-[168px] rounded-3xl mb-6 relative"
            style={{
              background: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVQaoVpavsqVMiZCy-7wWiB2UtqBQWhS_jUg&usqp=CAU') no-repeat center`,
              backgroundSize: "cover",
            }}
          >
            <div className="absolute -bottom-3 left-0 right-0 grid place-items-center">
              <p className="bg-orange-brand px-[12px] py-[8px] rounded-[56px] text-xs	text-white font-bold uppercase">
                Novidade
              </p>
            </div>
          </div>
          <div className="px-4 pb-6">
            <p className="text-cardapio-title  text-base mb-2">Hype Burguer</p>
            <p className="text-cardapio-title font-semibold">R$36,00</p>
          </div>
        </div>
        <div className="max-w-[168px] bg-white rounded-3xl">
          <div
            className="max-w-[168px] h-[168px] rounded-3xl mb-6 relative"
            style={{
              background: `url('/images/img.png') no-repeat center`,
              backgroundSize: "cover",
            }}
          >
            <div className="absolute -bottom-3 left-0 right-0 grid place-items-center">
              <p className="bg-orange-brand px-[12px] py-[8px] rounded-[56px] text-xs	text-white font-bold uppercase">
                Novidade
              </p>
            </div>
          </div>
          <div className="px-4 pb-6">
            <p className="text-cardapio-title  text-base mb-2">Hype Burguer</p>
            <p className="text-cardapio-title font-semibold">R$36,00</p>
          </div>
        </div>
        <div className="max-w-[168px] bg-white rounded-3xl">
          <div
            className="max-w-[168px] h-[168px] rounded-3xl mb-6 relative"
            style={{
              background: `url('/images/img.png') no-repeat center`,
              backgroundSize: "cover",
            }}
          >
            <div className="absolute -bottom-3 left-0 right-0 grid place-items-center">
              <p className="bg-orange-brand px-[12px] py-[8px] rounded-[56px] text-xs	text-white font-bold uppercase">
                Novidade
              </p>
            </div>
          </div>
          <div className="px-4 pb-6">
            <p className="text-cardapio-title  text-base mb-2">Hype Burguer</p>
            <p className="text-cardapio-title font-semibold">R$36,00</p>
          </div>
        </div>
        <div className="max-w-[168px] bg-white rounded-3xl">
          <div
            className="max-w-[168px] h-[168px] rounded-3xl mb-6 relative"
            style={{
              background: `url('/images/img.png') no-repeat center`,
              backgroundSize: "cover",
            }}
          >
            <div className="absolute -bottom-3 left-0 right-0 grid place-items-center">
              <p className="bg-orange-brand px-[12px] py-[8px] rounded-[56px] text-xs	text-white font-bold uppercase">
                Novidade
              </p>
            </div>
          </div>
          <div className="px-4 pb-6">
            <p className="text-cardapio-title  text-base mb-2">Hype Burguer</p>
            <p className="text-cardapio-title font-semibold">R$36,00</p>
          </div>
        </div>
        <div className="max-w-[168px] bg-white rounded-3xl">
          <div
            className="max-w-[168px] h-[168px] rounded-3xl mb-6 relative"
            style={{
              background: `url('/images/img.png') no-repeat center`,
              backgroundSize: "cover",
            }}
          >
            <div className="absolute -bottom-3 left-0 right-0 grid place-items-center">
              <p className="bg-orange-brand px-[12px] py-[8px] rounded-[56px] text-xs	text-white font-bold uppercase">
                Novidade
              </p>
            </div>
          </div>
          <div className="px-4 pb-6">
            <p className="text-cardapio-title  text-base mb-2">Hype Burguer</p>
            <p className="text-cardapio-title font-semibold">R$36,00</p>
          </div>
        </div>
        <div className="max-w-[168px] bg-white rounded-3xl">
          <div
            className="max-w-[168px] h-[168px] rounded-3xl mb-6 relative"
            style={{
              background: `url('/images/img.png') no-repeat center`,
              backgroundSize: "cover",
            }}
          >
            <div className="absolute -bottom-3 left-0 right-0 grid place-items-center">
              <p className="bg-orange-brand px-[12px] py-[8px] rounded-[56px] text-xs	text-white font-bold uppercase">
                Novidade
              </p>
            </div>
          </div>
          <div className="px-4 pb-6">
            <p className="text-cardapio-title  text-base mb-2">Hype Burguer</p>
            <p className="text-cardapio-title font-semibold">R$36,00</p>
          </div>
        </div>
      </Slider>

      {/* <div className="max-w-[168px] bg-white rounded-3xl">
        <div
          className="max-w-[168px] h-[168px] rounded-3xl mb-6 relative"
          style={{
            background: `url('http://localhost:3000/images/img.png') no-repeat center`,
            backgroundSize: "cover",
          }}
        >
          <div className="absolute -bottom-3 left-0 right-0 grid place-items-center">
            <p className="bg-orange-brand px-[12px] py-[8px] rounded-[56px] text-xs	text-white font-bold uppercase">
              Novidade
            </p>
          </div>
        </div>
        <div className="px-4 pb-6">
          <p className="text-cardapio-title  text-base mb-2">Hype Burguer</p>
          <p className="text-cardapio-title font-semibold">R$36,00</p>
        </div>
      </div> */}
    </div>
  );
};

export default DestaquesCardapio;
