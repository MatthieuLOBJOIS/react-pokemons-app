import React, { FunctionComponent, useState, useEffect } from 'react';
import Pokemon from './models/pokemon';
import POKEMONS from './models/mock-pokemon';

const App: FunctionComponent = () => {
	const [ pokemons, setPokemons ] = useState<Pokemon[]>([]);

	useEffect(() => {
		setPokemons(POKEMONS);
	}, []);

	return (
		<div>
			<h1>Pokedex</h1>
			<p>Il y a {pokemons.length} pokemons dans le Pokedex</p>
		</div>
	);
};

export default App;
