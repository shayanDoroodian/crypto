import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Nav from './components/Nav';
import Hero from './components/Hero';
import List from './components/List';
import Search from './components/Search';
import Footer from './components/Footer';
function App() {
	const [list, setList] = useState([]);
	const [filteredData, setFilteredData] = useState([]);
	const [filter, setFilter] = useState('');
	useEffect(() => {
		const getDat = async () => {
			const data = await axios.get(
				'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
			);
			// console.log(data.data);
			setList(data.data);
			setFilteredData(data.data);
		};
		getDat();
	}, []);
	useEffect(() => {
		const newList = list.filter((item) => {
			return item.name.toLowerCase().includes(filter.toLowerCase());
		});
		// console.log(newList);
		setFilteredData(newList);
	}, [filter]);
	return (
		<div className='App'>
			{/* {console.log(filter)} */}
			<Nav />
			<Hero />
			<Search setFilter={setFilter} />
			<List list={filteredData} filter={filter} />
			<Footer></Footer>
		</div>
	);
}

export default App;
