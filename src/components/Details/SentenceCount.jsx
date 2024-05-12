import { useEffect, useState } from 'react';
import { useText } from '../../contexts/TextContext';
import Wrapper from './Wrapper';

const SENTENCE_ENDINGS = /[.?!\n]+/;

const SentenceCount = () => {
	const { text } = useText();
	const [count, setCount] = useState(0);

	useEffect(() => {
		let newText = text;
		newText = newText.split(SENTENCE_ENDINGS);
		newText = newText.filter(
			(sentence) => sentence.length > 0 && sentence !== ' '
		);
		setCount(newText.length);
	}, [text]);

	return (
		<Wrapper
			name={'Sentences'}
			value={count}
		/>
	);
};

export default SentenceCount;
