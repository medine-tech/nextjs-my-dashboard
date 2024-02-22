interface Result {
	name: string;
	url: string;
}

export interface PokemonsResponse {
	count: number;
	next: string;
	previous: undefined | string;
	results: Result[];
}

export interface Ability2 {
	name: string;
	url: string;
}

export interface Ability {
	ability: Ability2;
	is_hidden: boolean;
	slot: number;
}

export interface Cries {
	latest: string;
	legacy: string;
}

export interface Form {
	name: string;
	url: string;
}

export interface Version {
	name: string;
	url: string;
}

export interface Index {
	game_index: number;
	version: Version;
}

export interface Item {
	name: string;
	url: string;
}

export interface Version2 {
	name: string;
	url: string;
}

export interface VersionDetail {
	rarity: number;
	version: Version2;
}

export interface HeldItem {
	item: Item;
	version_details: VersionDetail[];
}

export interface Move {
	name: string;
	url: string;
}

export interface VersionGroupDetail {
	level_learned_at: number;
}

export interface Mfe {
	move: Move;
	version_group_details: VersionGroupDetail[];
}

export interface Species {
	name: string;
	url: string;
}

export interface DreamWorld {
	front_default: string;
	front_female: any;
}

export interface Home {
	front_default: string;
	front_female: any;
	front_shiny: string;
	front_shiny_female: any;
}

export interface OfficialArtwork {
	front_default: string;
	front_shiny: string;
}

export interface Showdown {
	back_default: string;
	back_female: any;
	back_shiny: string;
	back_shiny_female: any;
	front_default: string;
	front_female: any;
	front_shiny: string;
	front_shiny_female: any;
}

export interface Other {
	dream_world: DreamWorld;
	home: Home;
	"official-artwork": OfficialArtwork;
	showdown: Showdown;
}

export interface Versions {}

export interface Sprites {
	back_default: string;
	back_female: any;
	back_shiny: string;
	back_shiny_female: any;
	front_default: string;
	front_female: any;
	front_shiny: string;
	front_shiny_female: any;
	other: Other;
	versions: Versions;
}

export interface RedBlue {
	back_default: string;
	back_gray: string;
	back_transparent: string;
	front_default: string;
	front_gray: string;
	front_transparent: string;
}

export interface Yellow {
	back_default: string;
	back_gray: string;
	back_transparent: string;
	front_default: string;
	front_gray: string;
	front_transparent: string;
}

export interface GenerationI {
	"red-blue": RedBlue;
	yellow: Yellow;
}

export interface Crystal {
	back_default: string;
	back_shiny: string;
	back_shiny_transparent: string;
	back_transparent: string;
	front_default: string;
	front_shiny: string;
	front_shiny_transparent: string;
	front_transparent: string;
}

export interface Gold {
	back_default: string;
	back_shiny: string;
	front_default: string;
	front_shiny: string;
	front_transparent: string;
}

export interface Silver {
	back_default: string;
	back_shiny: string;
	front_default: string;
	front_shiny: string;
	front_transparent: string;
}

export interface GenerationIi {
	crystal: Crystal;
	gold: Gold;
	silver: Silver;
}

export interface Emerald {
	front_default: string;
	front_shiny: string;
}

export interface FireredLeafgreen {
	back_default: string;
	back_shiny: string;
	front_default: string;
	front_shiny: string;
}

export interface RubySapphire {
	back_default: string;
	back_shiny: string;
	front_default: string;
	front_shiny: string;
}

export interface GenerationIii {
	emerald: Emerald;
	"firered-leafgreen": FireredLeafgreen;
	"ruby-sapphire": RubySapphire;
}

export interface DiamondPearl {
	back_default: string;
	back_female: any;
	back_shiny: string;
	back_shiny_female: any;
	front_default: string;
	front_female: any;
	front_shiny: string;
	front_shiny_female: any;
}

export interface HeartgoldSoulsilver {
	back_default: string;
	back_female: any;
	back_shiny: string;
	back_shiny_female: any;
	front_default: string;
	front_female: any;
	front_shiny: string;
	front_shiny_female: any;
}

export interface Platinum {
	back_default: string;
	back_female: any;
	back_shiny: string;
	back_shiny_female: any;
	front_default: string;
	front_female: any;
	front_shiny: string;
	front_shiny_female: any;
}

export interface GenerationIv {
	"diamond-pearl": DiamondPearl;
	"heartgold-soulsilver": HeartgoldSoulsilver;
	platinum: Platinum;
}

export interface Animated {
	back_default: string;
	back_female: any;
	back_shiny: string;
	back_shiny_female: any;
	front_default: string;
	front_female: any;
	front_shiny: string;
	front_shiny_female: any;
}

export interface BlackWhite {
	animated: Animated;
	back_default: string;
	back_female: any;
	back_shiny: string;
	back_shiny_female: any;
	front_default: string;
	front_female: any;
	front_shiny: string;
	front_shiny_female: any;
}

export interface GenerationV {
	"black-white": BlackWhite;
}

export interface OmegarubyAlphasapphire {
	front_default: string;
	front_female: any;
	front_shiny: string;
	front_shiny_female: any;
}

export interface XY {
	front_default: string;
	front_female: any;
	front_shiny: string;
	front_shiny_female: any;
}

export interface GenerationVi {
	"omegaruby-alphasapphire": OmegarubyAlphasapphire;
	"x-y": XY;
}

export interface Icons {
	front_default: string;
	front_female: any;
}

export interface UltraSunUltraMoon {
	front_default: string;
	front_female: any;
	front_shiny: string;
	front_shiny_female: any;
}

export interface GenerationVii {
	icons: Icons;
	"ultra-sun-ultra-moon": UltraSunUltraMoon;
}

export interface Icons2 {
	front_default: string;
	front_female: any;
}

export interface GenerationViii {
	icons: Icons2;
}

export interface Stat2 {
	name: string;
	url: string;
}

export interface Stat {
	base_stat: number;
	effort: number;
	stat: Stat2;
}

export interface Type2 {
	name: string;
	url: string;
}

export interface Type {
	slot: number;
	type: Type2;
}

export interface PokemonResponse {
	abilities: Ability[];
	base_experience: number;
	cries: Cries;
	forms: Form[];
	game_indices: Index[];
	height: number;
	held_items: HeldItem[];
	id: number;
	is_default: boolean;
	location_area_encounters: string;
	moves: Mfe[];
	name: string;
	order: number;
	past_abilities: any[];
	past_types: any[];
	species: Species;
	sprites: Sprites;
	stats: Stat[];
	types: Type[];
	weight: number;
}
