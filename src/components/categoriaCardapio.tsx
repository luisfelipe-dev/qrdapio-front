"use client";
import React from "react";
import {
  CardCardapioAvatar,
  CardCardapioContent,
  CardCardapioTextBold,
  CardCardapioTextDescription,
} from "./CardCardapio";

const CategoriaCardapio = () => {
  return (
    <div className="w-full mb-4">
      <h2 className="text-cardapio-title font-semibold text-xl mb-2">
        Categoria
      </h2>

      <div className="w-full">
        <CardCardapioContent
          className="grid mb-4"
          style={{
            gridTemplateColumns: "1fr 124px",
          }}
        >
          <div>
            <CardCardapioTextBold className="mb-1">
              Nome do produto bem grande!
            </CardCardapioTextBold>
            <CardCardapioTextDescription className="mb-4">
              Pão de brioche, maionese da casa, blend da casa de 200 gramas, 2
              fatias de queijo prato, cebola roxa, rúcula, tomate e bacon
              crocante.
            </CardCardapioTextDescription>
            <CardCardapioTextBold className="mb-1">
              R$0.000,00
            </CardCardapioTextBold>
          </div>
          <CardCardapioAvatar className="ml-4" />
        </CardCardapioContent>
        <CardCardapioContent
          className="grid mb-4"
          style={{
            gridTemplateColumns: "1fr 124px",
          }}
        >
          <div>
            <CardCardapioTextBold className="mb-1">
              Nome do produto bem grande!
            </CardCardapioTextBold>
            <CardCardapioTextDescription className="mb-4">
              Pão de brioche, maionese da casa, blend da casa de 200 gramas, 2
              fatias de queijo prato, cebola roxa, rúcula, tomate e bacon
              crocante.
            </CardCardapioTextDescription>
            <CardCardapioTextBold className="mb-1">
              R$0.000,00
            </CardCardapioTextBold>
          </div>
          <CardCardapioAvatar className="ml-4" />
        </CardCardapioContent>
        <CardCardapioContent
          className="grid mb-4"
          style={{
            gridTemplateColumns: "1fr 124px",
          }}
        >
          <div>
            <CardCardapioTextBold className="mb-1">
              Nome do produto bem grande!
            </CardCardapioTextBold>
            <CardCardapioTextDescription className="mb-4">
              Pão de brioche, maionese da casa, blend da casa de 200 gramas, 2
              fatias de queijo prato, cebola roxa, rúcula, tomate e bacon
              crocante.
            </CardCardapioTextDescription>
            <CardCardapioTextBold className="mb-1">
              R$0.000,00
            </CardCardapioTextBold>
          </div>
          <CardCardapioAvatar className="ml-4" />
        </CardCardapioContent>
      </div>
    </div>
  );
};

export default CategoriaCardapio;
