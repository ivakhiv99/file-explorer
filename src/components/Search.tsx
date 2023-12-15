import { useDebounce } from '../utils';
import { FC } from 'react';
import { StyledClearIcon } from '../styles/styledIcons';
import { InputWrapper, StyledInput } from '../styles/fileTreeStyles';

interface ISearch {
	handler: (value: string) => void;
}

const Search: FC<ISearch> = ({ handler }) => {
	const { inputValue, debouncedHandler } = useDebounce(handler, 700);

	const handleChange = (event: React.ChangeEvent) => {
		debouncedHandler((event.target as HTMLInputElement).value);
	};

	const handleClear = () => {
		handler('');
		debouncedHandler('');
	};

	return (
		<InputWrapper>
			<StyledInput
				placeholder="Search"
				value={inputValue}
				onChange={handleChange}
			/>
			{inputValue.length > 0 && <StyledClearIcon onClick={handleClear} />}
		</InputWrapper>
	);
};

export default Search;
