"use client";

import { getAllPokemons } from "@/queries/pokemons";
import { useQuery } from "@tanstack/react-query";
import PokemonItem from "./PokemonItem";

function PokemonList() {
  const { data: pokemons } = useQuery({ queryKey: ["pokemons"], queryFn: getAllPokemons });

  return (
    <div className="flex flex-col gap-10 py-10">
      <h2 className="font-bold text-[24px] text-center">포켓몬 도감</h2>
      <ul className="grid grid-cols-6 gap-4">
        {pokemons?.map((pokemon) => (
          <PokemonItem pokemon={pokemon} key={pokemon.id} />
        ))}
      </ul>
    </div>
  );
}

export default PokemonList;
