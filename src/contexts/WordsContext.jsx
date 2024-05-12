import { createContext, useContext, useEffect, useState } from 'react';
import { useText } from './TextContext';

const WordsContext = createContext();

export const useWords = () => useContext(WordsContext);

const WORD_ENDINGS = /[\s,;?!.:]+/;

const WordsProvider = ({ children }) => {
	const { text } = useText();
	const [words, setWords] = useState([]);

	useEffect(() => {
		let tempWords = text.split(WORD_ENDINGS);
		setWords(tempWords);
	}, [text]);

	return (
		<WordsContext.Provider value={{ words }}>
			{children}
		</WordsContext.Provider>
	);
};

export default WordsProvider;
