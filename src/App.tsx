import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PokemonList from './pages/PokemonList';
import PokemonsDetail from './pages/PokemonsDetail';

const App: FunctionComponent = () => {
	return (
		<Router>
			<div>
				{/* La barre de navigation commun à toutes les pages */}
				<nav>
					<div className="nav-wrapper teal">
						<Link to="/" className="brand-logo center">
							Pokédex
						</Link>
					</div>
				</nav>
				{/* Le système de gestion des routes de notre application */}
				<Switch>
					<Route exact path="/" component={PokemonList} />
					<Route exact path="/pokemons" component={PokemonList} />
					<Route path="/pokemons/:id" component={PokemonsDetail} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
