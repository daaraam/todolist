import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Detail from './pages/Detail';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/detail/:id" element={<Detail />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
