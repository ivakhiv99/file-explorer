import Input from '@mui/material/Input';
import { styled } from 'styled-components';
import { useDebounce } from '../utils';
import { FC } from 'react';
import ClearIcon from '@mui/icons-material/Clear';

const InputWrapper = styled.div`
	cursor: pointer;
	display: flex;
	justify-content: center;
`;

const StyledInput = styled(Input)`
	margin-bottom: 15px;
`;

const StyledClearIcon = styled(ClearIcon)`
	position: relative;
	right: 25px;
	width: 15px;
	height: 15px;
`;

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
				placeholder="search"
				value={inputValue}
				onChange={handleChange}
			/>
			<StyledClearIcon onClick={handleClear} />
		</InputWrapper>
	);
};

export default Search;
