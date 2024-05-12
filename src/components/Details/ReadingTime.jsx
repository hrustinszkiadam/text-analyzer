import { useEffect, useState } from 'react';
import { useText } from '../../contexts/TextContext';
import Wrapper from './Wrapper';

const AVERAGE_WORDS_PER_MINUTE = 200;

const ReadingTime = () => {
	const { text } = useText();
	const [minutes, setMinutes] = useState();

	useEffect(() => {
		if (text != '')
			setMinutes(Math.floor(text.length / AVERAGE_WORDS_PER_MINUTE) + 1);
		else setMinutes(undefined);
	}, [text]);

	return (
		<Wrapper
			name={'Average Reading Time:'}
			value={
				minutes
					? `~${minutes} ${minutes <= 1 ? 'minute' : 'minutes'}`
					: '-'
			}
			isRow
		/>
	);
};

export default ReadingTime;
