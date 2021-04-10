import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
// Components
import Header from './components/Header/Header.component';
import Footer from './components/Footer/Footer.component';
import CustomError from './components/CustomError/CustomError.component';
// Pages
import AsteroidsPage from './pages/asteroids/asteroids.page';
import AsteroidPage from './pages/asteroid/asteroid.page';
const App = () => {
	return (
		<div className='container'>
			<Header />
			<Switch>
				<Route path='/' exact component={AsteroidsPage} />
				<Route path='/:asteroidId' exact component={AsteroidPage} />
				<Route path='/destroy' exact></Route>
				<Route path='*'>
					<CustomError errorLabel='Ошибка! Вы попали не туда!' />
				</Route>
			</Switch>
			<Footer />
		</div>
	);
};

export default App;
