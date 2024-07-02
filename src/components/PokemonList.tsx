"use client";

import { getAllPokemons } from "@/queries/pokemons";
import { useSearchStore } from "@/store/searchValue.store";
import { useQuery } from "@tanstack/react-query";
import PokemonItem from "./PokemonItem";

function PokemonList() {
  const searchValue = useSearchStore((state) => state.searchValue);
  const { data: pokemons } = useQuery({ queryKey: ["pokemons"], queryFn: getAllPokemons });
  const searchPokemons = pokemons?.filter((pokemon) => pokemon.korean_name.includes(searchValue));

  return (
    <ul className="w-[100%] grid grid-cols-6 gap-4">
      {searchValue
        ? searchPokemons?.map((pokemon) => <PokemonItem pokemon={pokemon} key={pokemon.id} />)
        : pokemons?.map((pokemon) => <PokemonItem pokemon={pokemon} key={pokemon.id} />)}
    </ul>
  );
}

export default PokemonList;
