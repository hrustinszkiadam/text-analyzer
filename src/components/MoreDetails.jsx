import LongestWord from './Details/LongestWord';
import ReadingTime from './Details/ReadingTime';

const MoreDetails = () => {
	return (
		<div className='flex flex-row gap-x-60 p-3 justify-center items-center flex-wrap'>
			<ReadingTime />
			<LongestWord />
		</div>
	);
};

export default MoreDetails;
