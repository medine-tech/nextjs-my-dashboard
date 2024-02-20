import Pokemon from "@/modules/pokemons/domain/pokemon";
import { PokemonsResponse } from "@/modules/pokemons/infrastructure/response";
import { PokemonGrid } from "@/sections/pokemons/grid";

const getPokemons = async (limit = 20, offset = 0): Promise<Pokemon[]> => {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const data: PokemonsResponse = await response.json();

	return data.results.map((pokemon) => ({
		id: pokemon.url.split("/").at(-2) ?? "",
		name: pokemon.name,
	}));
};

export default async function PokemonsPage() {
	const pokemons = await getPokemons(151);

	return (
		<div className={"flex flex-col"}>
			<span className={"text-5xl my-2"}>
				Pokemons List <small>Static</small>
			</span>
			<PokemonGrid pokemons={pokemons} />
		</div>
	);
}
