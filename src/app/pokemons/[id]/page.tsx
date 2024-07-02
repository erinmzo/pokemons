"use client";
import PokemonDetailCard from "@/components/PokemonDetailCard";
import { getPokemon } from "@/queries/pokemons";
import { useQuery } from "@tanstack/react-query";
import { Metadata } from "next";
import { useParams } from "next/navigation";

// 메타데이터
type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;
  const { data: pokemon } = useQuery({ queryKey: ["pokemon", id], queryFn: () => getPokemon(id.toString()) });
  return {
    title: pokemon?.korean_name,
    description: `${pokemon?.korean_name} 상세페이지 입니다.`,
  };
}

// 뷰
function DetialPage() {
  const { id } = useParams();

  const {
    data: pokemon,
    isSuccess,
    isPending,
  } = useQuery({ queryKey: ["pokemon", id], queryFn: () => getPokemon(id.toString()) });

  if (isPending) return <div>Loading...</div>;

  if (isSuccess)
    return (
      <div>
        <PokemonDetailCard pokemon={pokemon} />
      </div>
    );
}

export default DetialPage;
