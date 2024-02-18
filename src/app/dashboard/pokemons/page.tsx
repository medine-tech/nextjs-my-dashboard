import Image from "next/image";

import Pokemon from "@/modules/pokemons/domain/pokemon";
import { PokemonsResponse } from "@/modules/pokemons/infrastructure/response";

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
			<div className={"flex flex-wrap gap-10 items-center justify-center"}>
				{pokemons.map((pokemon) => (
					<Image
						key={pokemon.id}
						src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
						alt={pokemon.name}
						width={100}
						height={100}
					/>
				))}
			</div>
		</div>
	);
}
