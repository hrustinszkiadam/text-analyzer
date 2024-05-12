import { useEffect, useRef } from 'react';
import { useText } from '../contexts/TextContext';

const Input = () => {
	const { text, setText } = useText();
	const inputRef = useRef();

	useEffect(() => {
		inputRef.current.focus();
	}, []);

	return (
		<textarea
			value={text}
			onChange={(e) => setText(e.target.value)}
			ref={inputRef}
			type='text'
			placeholder='Paste your text here...'
			style={{
				width: '40vw',
				height: '30vh',
				resize: 'none',
			}}
			className='p-8 outline-none rounded-md text-gray-900'
		/>
	);
};

export default Input;
