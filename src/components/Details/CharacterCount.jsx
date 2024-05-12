import { useEffect, useState } from 'react';
import { useText } from '../../contexts/TextContext';
import Wrapper from './Wrapper';

const CharacterCount = () => {
	const { text } = useText();
	const [count, setCount] = useState(0);

	useEffect(() => {
		const characters = [...text];
		setCount(characters.length);
	}, [text]);

	return (
		<Wrapper
			name={'Characters'}
			value={count}
		/>
	);
};

export default CharacterCount;
