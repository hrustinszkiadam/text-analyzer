import WordCount from './Details/WordCount';
import CharacterCount from './Details/CharacterCount';
import SentenceCount from './Details/SentenceCount';
import ParagraphCount from './Details/ParagraphCount';
import PronounCount from './Details/PronounCount';

const Details = () => {
	return (
		<div className='flex flex-row gap-20 p-3'>
			<WordCount />
			<CharacterCount />
			<SentenceCount />
			<ParagraphCount />
			<PronounCount />
		</div>
	);
};

export default Details;
