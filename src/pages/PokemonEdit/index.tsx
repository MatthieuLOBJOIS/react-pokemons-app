import React, { FunctionComponent, useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import PokemonForm from '../../components/PokemonForm';
import Pokemon from '../../models/pokemon';
import POKEMONS from '../../models/mock-pokemon';

type Params = { id: string };

const PokemonEdit: FunctionComponent<RouteComponentProps<Params>> = ({ match }) => {
	const [ pokemon, setPokemon ] = useState<Pokemon | null>(null);

	useEffect(() => {
			fetch(`http://localhost:3001/pokemons/${match.params.id}`)
			.then(response => response.json())
			.then((pokemon) => {
				if(pokemon.id) setPokemon(pokemon);
			});
		},[ match.params.id ]);

	return (
		<div>
			{pokemon ? (
				<div className="row">
					<h2 className="header center">Éditer {pokemon.name}</h2>
					<PokemonForm pokemon={pokemon} />
				</div>
			) : (
				<h4 className="center">Aucun pokémon à afficher !</h4>
			)}
		</div>
	);
};

export default PokemonEdit;
