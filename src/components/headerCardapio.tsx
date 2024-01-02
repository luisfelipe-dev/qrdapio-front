"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

type HeaderCardapioProps = {
  URLImage: string;
};

function HeaderCardapio({ URLImage }: HeaderCardapioProps) {
  return (
    <div
      style={{
        backgroundImage: `url(${URLImage})`,
      }}
      className={`w-full bg-amber-200 h-[200px] mt-3 rounded-3xl relative bg-auto bg-no-repeat bg-center mb-6`}
    >
      <Dialog>
        <DialogTrigger className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-[80px] font-semibold cursor-pointer">
          Informações
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Sobre</DialogTitle>
            <DialogDescription>
              <div style={{maxHeight: '550px', overflowY: 'scroll'}} className="hideScroll">
                <p className="tagline text-neutral-500 text-sm font-normal mb-6	">
                  Imagine uma hamburgueria onde cada pedaço é uma obra de arte
                  gastronômica. Os suculentos hambúrgueres são cuidadosamente
                  preparados com carne artesanal, temperada e moldada à mão,
                  grelhada à perfeição. Os pães, frescos e feitos
                  artesanalmente, são macios por dentro e levemente crocantes
                  por fora, proporcionando o complemento ideal para cada
                  mordida.
                </p>

                <p className="tagline text-redmain-brand text-sm font-medium mb-6">
                  #hamburguer #burguer #artesanal #feitonahora #hamburgueria
                  #americana #delivery #gastronomia
                </p>

                <div className="bg-neutral-100 p-6 rounded-3xl">
                  <div className="flex flex-col mb-4">
                    <p className="text-sm text-neutral-500 font-normal">Segunda-feira</p>
                    <p className="text-sm text-neutral-500 font-normal">00:00 às 01:00 - 11:30 às 23:59</p>
                  </div>
                  <div className="flex flex-col mb-4">
                    <p className="text-sm text-neutral-500 font-normal">Terça-feira</p>
                    <p className="text-sm text-neutral-500 font-normal">00:00 às 01:00 - 11:30 às 23:59</p>
                  </div>
                  <div className="flex flex-col mb-4">
                    <p className="text-sm text-neutral-500 font-normal">Quarta-feira</p>
                    <p className="text-sm text-neutral-500 font-normal">00:00 às 01:00 - 11:30 às 23:59</p>
                  </div>
                  <div className="flex flex-col mb-4">
                    <p className="text-sm text-neutral-500 font-normal">Quinta-feira</p>
                    <p className="text-sm text-neutral-500 font-normal">00:00 às 01:00 - 11:30 às 23:59</p>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm text-neutral-500 font-normal">Sexta-feira</p>
                    <p className="text-sm text-neutral-500 font-normal">00:00 às 01:00 - 11:30 às 23:59</p>
                  </div>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      {/* </button> */}
    </div>
  );
}

export default HeaderCardapio;
