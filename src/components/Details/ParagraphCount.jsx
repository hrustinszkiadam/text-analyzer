import { useEffect, useState } from 'react';
import { useText } from '../../contexts/TextContext';
import Wrapper from './Wrapper';

const ParagraphCount = () => {
	const { text } = useText();
	const [count, setCount] = useState(0);

	useEffect(() => {
		let newText = text;
		newText = newText.split('\n');
		if (newText[newText.length - 1] !== '')
			setCount(newText.filter((par) => par !== '').length);
		else if (newText.length === 1) setCount(0);
	}, [text]);

	return (
		<Wrapper
			name={'Paragraphs'}
			value={count}
		/>
	);
};

export default ParagraphCount;
