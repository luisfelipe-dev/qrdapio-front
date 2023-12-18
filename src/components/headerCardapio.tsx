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
              conteudo aqui
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      {/* </button> */}
    </div>
  );
}

export default HeaderCardapio;
