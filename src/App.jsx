import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
// Components
import Header from './components/Header/Header.component';
import Footer from './components/Footer/Footer.component';
import CustomError from './components/CustomError/CustomError.component';
// Pages
import AsteroidsPage from './pages/asteroids/asteroids.page';
import AsteroidPage from './pages/asteroid/asteroid.page';
import WelcomePage from './pages/welcome/welcome.page';
import DestroyPage from './pages/destroy/destroy.page';
const App = () => {
	const [destroyData, setDestroyData] = useState([]);
	const handleAddToDestroyData = (asteroid) => {
		if (checkIfInDestroyData(asteroid.id)) {
			setDestroyData((prev) => prev.filter((item) => item.id !== asteroid.id));
		} else {
			const item = {
				name: asteroid.name,
				diameterInM: asteroid.diameterInM,
				id: asteroid.id,
				isHazardous: asteroid.isHazardous
			};
			setDestroyData((prev) => [...prev, item]);
		}
	};
	const checkIfInDestroyData = (id) => {
		if (destroyData.findIndex((item) => item.id === id) === -1) {
			return false;
		} else {
			return true;
		}
	};
	const countDestroyData = () => {
		return destroyData.length;
	};
	const handleDestroy = () => {
		if (destroyData.some((item) => item.isHazardous)) {
			setDestroyData((prev) => prev.filter((item) => !item.isHazardous));
		} else {
			setDestroyData([]);
		}
	};
	return (
		<div className='container'>
			<Header destroyDataCount={countDestroyData} />
			<Switch>
				<Route path='/' exact>
					<WelcomePage />
				</Route>
				<Route path='/asteroids' exact>
					<AsteroidsPage
						addToDestroyData={handleAddToDestroyData}
						checkDestroyData={checkIfInDestroyData}
					/>
				</Route>
				<Route path='/asteroids/:asteroidId' exact>
					<AsteroidPage
						addToDestroyData={handleAddToDestroyData}
						checkDestroyData={checkIfInDestroyData}
					/>
				</Route>
				<Route path='/destroy' exact>
					<DestroyPage
						handleDestroy={handleDestroy}
						destroyData={destroyData}
					/>
				</Route>
				<Route path='*'>
					<CustomError errorLabel='Ошибка! Вы попали не туда!' />
				</Route>
			</Switch>
			<Footer />
		</div>
	);
};

export default App;
