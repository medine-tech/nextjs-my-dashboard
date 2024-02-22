import Pokemon from "@/modules/pokemons/domain/pokemon";
import { PokemonResponse } from "@/modules/pokemons/infrastructure/response";

interface PokemonPageProps {
	params: { id: string };
}

const getPokemon = async (id: string): Promise<Pokemon> => {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const { name }: PokemonResponse = await response.json();

	//throw new Error("This is an error");

	return { id, name };
};

export default async function PokemonPage({ params }: PokemonPageProps) {
	const pokemon = await getPokemon(params.id);

	return (
		<>
			<h1>
				Pokemon Page {params.id} - {pokemon.name}
			</h1>
			<hr />
		</>
	);
}
