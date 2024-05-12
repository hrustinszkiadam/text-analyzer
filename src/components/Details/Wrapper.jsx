const Wrapper = ({ name, value, isRow = false }) => {
	return (
		<div
			className={`flex text-center font-bold ${
				isRow ? 'flex-row gap-3' : 'flex-col'
			}`}
		>
			<div className='text-gray-100'>{name}</div>
			<div className='text-gray-800'>{value}</div>
		</div>
	);
};

export default Wrapper;
