import { Pokemon } from "@/types/pokemons.type";
import axios from "axios";

export async function getAllPokemons(): Promise<Pokemon[]> {
  const { data } = await axios.get("https://pokemons-one-xi.vercel.app/api/pokemons");
  return data;
}

export async function getPokemon(id: string): Promise<Pokemon> {
  const { data } = await axios.get(`https://pokemons-one-xi.vercel.app/api/pokemons/${id}`);
  return data;
}
