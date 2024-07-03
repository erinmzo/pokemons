import { Pokemon } from "@/types/pokemons.type";
import axios from "axios";

export async function getAllPokemons(): Promise<Pokemon[]> {
  const { data } = await axios.get("/api/pokemons");
  return data;
}

export async function getPokemon(id: string): Promise<Pokemon> {
  const { data } = await axios.get(`/api/pokemons/${id}`);
  return data;
}
