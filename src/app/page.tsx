import PokemonList from "@/components/PokemonList";
import Search from "@/components/Search";

export default function Home() {
  return (
    <div className="w-[1024px] mx-auto flex flex-col items-center gap-10 py-10">
      <h2 className="font-bold text-[24px] text-center">포켓몬 도감</h2>
      <Search />
      <PokemonList />
    </div>
  );
}
