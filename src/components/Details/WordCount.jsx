import { useEffect, useState } from 'react';
import { useWords } from '../../contexts/WordsContext';
import Wrapper from './Wrapper';

const WordCount = () => {
	const { words } = useWords();
	const [count, setCount] = useState(0);

	useEffect(() => {
		setCount(
			words[words.length - 1] !== '' ? words.length : words.length - 1
		);
	}, [words]);

	return (
		<Wrapper
			name={'Words'}
			value={count}
		/>
	);
};

export default WordCount;
