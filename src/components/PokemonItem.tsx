import { Pokemon } from "@/types/pokemons.type";
import Image from "next/image";
import Link from "next/link";

function PokemonItem({ pokemon }: { pokemon: Pokemon }) {
  return (
    <li className="border border-white rounded-lg text-center">
      <Link href={`/pokemons/${pokemon.id}`}>
        <div className="relative aspect-square">
          <Image
            src={pokemon.sprites.front_default}
            alt={pokemon.korean_name}
            fill={true}
            className="object-cover"
            sizes="160px"
            quality={75}
            priority={true}
          />
        </div>
        <h3>{pokemon.korean_name}</h3>
        <p>도감번호: {pokemon.id}</p>
      </Link>
    </li>
  );
}

export default PokemonItem;
