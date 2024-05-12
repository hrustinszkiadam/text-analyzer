import Details from './components/Details';
import Input from './components/Input';
import MoreDetails from './components/MoreDetails';
import TextProvider from './contexts/TextContext';
import WordsProvider from './contexts/WordsContext';

const App = () => {
	return (
		<div className='h-screen flex justify-center items-center bg-zinc-600'>
			<TextProvider>
				<WordsProvider>
					<div className='h-[45%] w-[45%] bg-gray-400 flex justify-center items-center flex-col rounded-lg'>
						<Details />
						<Input />
						<MoreDetails />
					</div>
				</WordsProvider>
			</TextProvider>
		</div>
	);
};

export default App;
