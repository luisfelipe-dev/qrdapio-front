import { AvatarRestaurante } from "@/components/avatarRestaurante";
import { ContainerGrid } from "@/components/container";
import HeaderCardapio from "@/components/headerCardapio";
import { Metadata } from "next";
import { Star } from "@phosphor-icons/react/dist/ssr";

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
        <div className="flex flex-wrap">
          <div className="flex w-full">
            <AvatarRestaurante className="mr-4" />

            <div className="flex items-center">
              <span>
                <div className="flex items-center">
                  <p className="mr-6 font-semibold text-cardapio-title text-[24px]">
                    QRDapio Burguer
                  </p>
                  <p className="text-cardapio-title text-sm font-semibold flex items-center">
                    <Star weight="fill" className="mr-2"/> 4.0
                  </p>
                </div>
                <p className="text-sm text-success font-semibold">Aberto</p>
              </span>
            </div>
          </div>
        </div>
      </ContainerGrid>
      {/* <p>{params.slug}</p> */}
    </>
  );
}
