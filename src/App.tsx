import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PokemonList from './pages/PokemonList';
import PokemonsDetail from './pages/PokemonsDetail';
import PageNotFound from './pages/PageNotFound';
import PokemonEdit from './pages/PokemonEdit';
import PokemonAdd from './pages/PokemonAdd';
import Login from './pages/Login';
import PrivateRoute from './PrivateRoute';

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
					<PrivateRoute exact path="/" component={PokemonList} />
					<Route exact path="/login" component={Login} />
					<PrivateRoute exact path="/pokemons" component={PokemonList} />
					<PrivateRoute exact path="/pokemon/add" component={PokemonAdd} />
					<PrivateRoute exact path="/pokemons/edit/:id" component={PokemonEdit} />
					<PrivateRoute path="/pokemons/:id" component={PokemonsDetail} />
					<Route component={PageNotFound} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
