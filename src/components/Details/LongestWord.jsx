import { useEffect, useState } from 'react';
import { useWords } from '../../contexts/WordsContext';
import Wrapper from './Wrapper';

const LongestWord = () => {
	const { words } = useWords();
	const [longest, setLongest] = useState();

	useEffect(() => {
		const newWords = [...words];
		const tempLongest = newWords.sort((a, b) => b.length - a.length)[0];

		setLongest(tempLongest === '' ? '-' : tempLongest);
	}, [words]);
	return (
		<Wrapper
			name={'Longest Word: '}
			value={longest}
			isRow
		/>
	);
};

export default LongestWord;
