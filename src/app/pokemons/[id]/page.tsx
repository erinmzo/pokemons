import { getPokemon } from "@/queries/pokemons";
import { Metadata } from "next";
import DetailPage from "./_components/DetailPage";

// 메타데이터 생성
type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;
  const pokemon = await getPokemon(id.toString());
  return {
    title: pokemon.korean_name,
    description: `${pokemon.korean_name} 상세페이지 입니다.`,
  };
}

// 서버 컴포넌트에서 클라이언트 컴포넌트를 포함
export default function Page({ params }: Props) {
  return <DetailPage id={params.id} />;
}
