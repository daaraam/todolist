import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Detail from './pages/Detail';
import Main from './pages/Main';

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
