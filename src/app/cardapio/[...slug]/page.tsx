
import { AvatarRestaurante } from "@/components/avatarRestaurante";
import { ContainerGrid } from "@/components/container";
import HeaderCardapio from "@/components/headerCardapio";
import { Metadata } from "next";
import {
  Star,
  WhatsappLogo,
  InstagramLogo,
  FacebookLogo,
} from "@phosphor-icons/react/dist/ssr";
import FidelidadeCardapio from "@/components/fidelidadeCardapaio";
import DestaquesCardapio from "@/components/destaquesCardapio";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: params.slug[0],
  };
}

export default function Page({ params }: Props) {
  return (
    <>
      <ContainerGrid>
        <HeaderCardapio URLImage="/images/hamburguer.png" />
        <div className="flex flex-wrap px-2 border-b border-neutral-500 mb-4 sm:flex-nowrap sm:items-center sm:border-transparent">
          <div className="flex w-full mb-4">
            <AvatarRestaurante />

            <div className="flex w-full items-center ml-4">
              <span className="w-full flex items-center flex-wrap">
                <div className="w-full flex items-center  justify-between sm:justify-start">
                  <p className="font-semibold text-cardapio-title text-[22px]">
                    {params.slug}
                  </p>
                  <p className="text-cardapio-title text-sm font-semibold flex items-center sm:ml-6">
                    <Star
                      color="#FF9914"
                      size={16}
                      weight="fill"
                      className="mr-2"
                    />{" "}
                    4.0
                  </p>
                </div>
                <p className="w-full text-sm text-success font-semibold">
                  Aberto
                </p>
              </span>
            </div>
          </div>

          <div className="flex w-full justify-center sm:justify-end gap-4 mb-4 sm:max-w-[224px]">
            <WhatsappLogo size={32} color="#EF233C" />
            <InstagramLogo size={32} color="#EF233C" />
            <FacebookLogo size={32} color="#EF233C" />
          </div>
        </div>

        <FidelidadeCardapio />
        <DestaquesCardapio />
      </ContainerGrid>
      {/* <p>{params.slug}</p> */}
    </>
  );
}
