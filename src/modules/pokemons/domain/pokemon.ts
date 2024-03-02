import { Mfe, Sprites, Type } from "@/modules/pokemons/infrastructure/response";

export default interface Pokemon {
	id: string;
	name: string;
	sprites: Sprites;
	moves: Mfe[];
	types: Type[];
	weight: number;
}
