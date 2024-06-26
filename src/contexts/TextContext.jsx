import { createContext, useContext, useState } from 'react';

const TextContext = createContext();

export const useText = () => useContext(TextContext);

const TextProvider = ({ children }) => {
	const [text, setText] = useState('');
	return (
		<TextContext.Provider value={{ text, setText }}>
			{children}
		</TextContext.Provider>
	);
};

export default TextProvider;
