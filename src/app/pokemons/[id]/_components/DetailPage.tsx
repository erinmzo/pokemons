"use client";

import PokemonDetailCard from "@/components/PokemonDetailCard";
import { getPokemon } from "@/queries/pokemons";
import { useQuery } from "@tanstack/react-query";

// 뷰
type DetailPageProps = {
  id: string;
};

function DetailPage({ id }: DetailPageProps) {
  const {
    data: pokemon,
    isSuccess,
    isLoading,
  } = useQuery({
    queryKey: ["pokemon", id],
    queryFn: () => getPokemon(id.toString()),
  });

  if (isLoading) return <div>Loading...</div>;

  if (isSuccess)
    return (
      <div>
        <PokemonDetailCard pokemon={pokemon} />
      </div>
    );
}

export default DetailPage;
