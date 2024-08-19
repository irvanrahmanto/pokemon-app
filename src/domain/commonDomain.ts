export interface Pokemon {
  name: string;
}

export interface PokemonStat {
  stat: {
    name: string;
  };
  base_stat: number;
}

export interface PokemonSprites {
  front_default: string;
}

export interface SelectedPokemon {
  name: string;
  height: number;
  weight: number;
  sprites: PokemonSprites;
  stats: PokemonStat[];
}
