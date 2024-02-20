import Pokemon from "@/modules/pokemons/domain/pokemon";
import { PokemonCard } from "@/sections/pokemons/card";

interface PokemonGridProps {
	pokemons: Pokemon[];
}

export const PokemonGrid = ({ pokemons }: PokemonGridProps) => {
	return (
		<div className={"flex flex-wrap gap-10 items-center justify-center"}>
			{pokemons.map((pokemon) => (
				<PokemonCard pokemon={pokemon} key={pokemon.id} />
			))}
		</div>
	);
};
