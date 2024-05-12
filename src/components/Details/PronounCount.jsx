import { useEffect, useState } from 'react';
import { pronouns } from '../../utils/pronouns';
import { useWords } from '../../contexts/WordsContext';
import Wrapper from './Wrapper';

const PronounCount = () => {
	const { words } = useWords();
	const [count, setCount] = useState(0);

	useEffect(() => {
		let tempCount = 0;

		words.map((word) => {
			tempCount += pronouns.includes(word.toLowerCase()) ? 1 : 0;
		});

		setCount(tempCount);

		return () => {
			tempCount = 0;
		};
	}, [words]);

	return (
		<Wrapper
			name='Pronouns'
			value={count}
		/>
	);
};

export default PronounCount;
