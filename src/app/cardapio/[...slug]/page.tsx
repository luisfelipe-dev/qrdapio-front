import { ContainerGrid } from '@/components/container';
import HeaderCardapio from '@/components/headerCardapio';
import { Metadata } from 'next';

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
        <HeaderCardapio />
      </ContainerGrid>
      {/* <p>{params.slug}</p> */}
    </>
  );
}