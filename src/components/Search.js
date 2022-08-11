import React from 'react';
import './search.css';
const Search = ({ setFilter }) => {
	return (
		<div className='searchContainer'>
			<h2>Search your currency here</h2>
			<input
				type='text'
				placeholder='for example : Bitcoin , Ethereum'
				onChange={(e) => {
					setFilter(e.target.value);
				}}
			/>
		</div>
	);
};

export default Search;
