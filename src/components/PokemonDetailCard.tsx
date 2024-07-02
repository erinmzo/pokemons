import { Pokemon } from "@/types/pokemons.type";
import Image from "next/image";

function PokemonDetailCard({ pokemon }: { pokemon: Pokemon }) {
  return (
    <div className="overflow-hidden w-[640px] pb-10 mx-auto my-10 flex flex-col items-center gap-4 rounded-lg bg-white text-black">
      <div className="w-[100%] py-6 bg-slate-100 flex flex-col items-center">
        <h3 className="font-bold text-[24px]">{pokemon.korean_name}</h3>
        <div>No. 00{pokemon.id}</div>
      </div>
      <Image src={pokemon.sprites.front_default} alt={pokemon.korean_name} width={150} height={150} />
      <div className="flex flex-col gap-3 items-center">
        <div>이름: {pokemon.korean_name}</div>
        <div className="flex gap-2">
          <span>키: 0.{pokemon.height}m</span>
          <span>무게: {pokemon.weight}0g</span>
        </div>
        <div className="flex gap-4">
          <h4 className="font-bold">타입:</h4>
          <ul className="flex gap-2">
            {pokemon.types.map((type) => (
              <li key={type.type.name} className="px-2 py-1 bg-orange-400 rounded">
                {type.type.korean_name}
              </li>
            ))}
          </ul>
          <h4 className="font-bold">특성:</h4>
          <ul className="flex gap-2">
            {pokemon.abilities.map((ability) => (
              <li key={ability.ability.name} className="px-2 py-1 bg-green-500 rounded">
                {ability.ability.korean_name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <h4 className="font-bold">기술: </h4>
      <div className="w-[540px] mx-auto text-center">
        {pokemon.moves.map((move) => (
          <span key={move.move.name} className="ml-4">
            {move.move.korean_name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default PokemonDetailCard;
