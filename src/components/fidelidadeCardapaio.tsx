"use client";
import React from "react";
import Slider from "react-slick";

const FidelidadeCardapio = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-white p-4 sm:p-6 mb-4 sm:mb-6 rounded-[32px]">
      <div className="mb-4">
        <h2 className="text-cardapio-title font-semibold text-2xl">
          Fidelidade
        </h2>
        <p className="tagline text-sm	text-neutral-500">
          Quanto maior sua fome maior o desconto!
        </p>
      </div>

      <Slider {...settings}>
        <div>
          <div className="w-[80px] h-[80px] bg-neutral-100 justify-center items-center flex rounded-full mb-2">
            <p className="text-cardapio-title font-semibold text-2xl">
              <span className="text-sm mt -mt-8">R$</span>5
            </p>
          </div>

          <p className="text-sm font-semibold text-cardapio-title">5 compras</p>
        </div>
        <div>
          <div className="w-[80px] h-[80px] bg-neutral-100 justify-center items-center flex rounded-full mb-2">
            <p className="text-cardapio-title font-semibold text-2xl">
              <span className="text-sm mt -mt-8">R$</span>10
            </p>
          </div>

          <p className="text-sm font-semibold text-cardapio-title">
            10 compras
          </p>
        </div>
        <div>
          <div className="w-[80px] h-[80px] bg-neutral-100 justify-center items-center flex rounded-full mb-2">
            <p className="text-cardapio-title font-semibold text-2xl">
              <span className="text-sm mt -mt-8">R$</span>15
            </p>
          </div>

          <p className="text-sm font-semibold text-cardapio-title">
            15 compras
          </p>
        </div>
        <div>
          <div className="w-[80px] h-[80px] bg-neutral-100 justify-center items-center flex rounded-full mb-2">
            <p className="text-cardapio-title font-semibold text-2xl">20%</p>
          </div>

          <p className="text-sm font-semibold text-cardapio-title">
            20 compras
          </p>
        </div>
        <div>
          <div className="w-[80px] h-[80px] bg-neutral-100 justify-center items-center flex rounded-full mb-2">
            <p className="text-cardapio-title font-semibold text-2xl">30%</p>
          </div>

          <p className="text-sm font-semibold text-cardapio-title">
            30 compras
          </p>
        </div>
        <div>
          <div className="w-[80px] h-[80px] bg-neutral-100 justify-center items-center flex rounded-full mb-2">
            <p className="text-cardapio-title font-semibold text-2xl">40%</p>
          </div>

          <p className="text-sm font-semibold text-cardapio-title">
            40 compras
          </p>
        </div>
        <div>
          <div className="w-[80px] h-[80px] bg-neutral-100 justify-center items-center flex rounded-full mb-2">
            <p className="text-cardapio-title font-semibold text-2xl">50%</p>
          </div>

          <p className="text-sm font-semibold text-cardapio-title">
            50 compras
          </p>
        </div>
        <div>
          <div className="w-[80px] h-[80px] bg-neutral-100 justify-center items-center flex rounded-full mb-2">
            <p className="text-cardapio-title font-semibold text-2xl">100%</p>
          </div>

          <p className="text-sm font-semibold text-cardapio-title">
            60 compras
          </p>
        </div>
      </Slider>
    </div>
  );
};

export default FidelidadeCardapio;
