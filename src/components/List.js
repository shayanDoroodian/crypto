import './list.css';
import Card from './Card';
import { Pagination } from '@mui/material';
import { useState, useRef, useEffect } from 'react';
// import Modal from '@mui/material/Modal';
import { Modal, Box } from '@mui/material';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	// border: '2px solid #000',
	borderRadius: '25px',
	boxShadow: 24,
	p: 4,
	// background: `url(${selectedItem.image}) no-repeat center center / cover`,
};
const List = ({ list, filter }) => {
	const inputRef = useRef();
	const [curentPage, setCurentPage] = useState(1);
	const itemPerPage = 6;
	const indexOfLast = itemPerPage * curentPage;
	const indexOfFirst = indexOfLast - itemPerPage;
	const everyPageData = list.slice(indexOfFirst, indexOfLast);
	const [modal, setMolad] = useState('');
	const selectedItem = list.find((item) => item.id === modal) || [];
	const [open, setOpen] = useState(false);

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	useEffect(() => {
		setCurentPage(1);
	}, [filter]);
	const paginate = (e, value) => {
		setCurentPage(value);
		window.scrollTo({ top: inputRef.current.offsetTop });
	};

	return (
		<div className='listContainer' ref={inputRef}>
			<h1>List</h1>

			<div className='cardContainer'>
				{everyPageData?.map((item) => (
					<Card
						key={item.id}
						setOpen={setOpen}
						setMolad={setMolad}
						img={item.image}
						name={item.name}
						total_volume={item.total_volume}
						total_supply={item.total_supply}
						market_cap_rank={item.market_cap_rank}
						max_supply={item.max_supply}
						price={item.current_price}
						id={item.id}></Card>
				))}
			</div>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
				}}>
				<Pagination
					count={Math.ceil(list.length / itemPerPage)}
					page={curentPage}
					onChange={paginate}></Pagination>
			</div>

			<Modal
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropProps={{
					timeout: 500,
				}}>
				<Box sx={style}>
					<img
						src={selectedItem.image}
						alt=''
						style={{
							position: 'absolute',
							right: '0',
							top: '0',
							width: '40%',
							transform: 'translate(40%,-40%)',
						}}
					/>
					<h1>{selectedItem.name}</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. At,
						assumenda.
					</p>
					<p>total volume : {selectedItem.total_volume}</p>
					<p>total supply : {selectedItem.total_supply}</p>
					<p>max supply : {selectedItem.max_supply}</p>
				</Box>
			</Modal>
		</div>
	);
};

export default List;
