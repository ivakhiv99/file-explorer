import Input from '@mui/material/Input';
import { styled } from 'styled-components';
import { useDebounce } from '../utils';
import { FC, useEffect } from 'react';

const StyledInput = styled(Input)`
	margin-bottom: 15px;
`;

interface ISearch {
	handler: (value: string) => void;
}

const Search: FC<ISearch> = ({ handler }) => {
	const { inputValue, debouncedHandler } = useDebounce(handler, 1000);

	const handleChange = (event: React.ChangeEvent) => {
		debouncedHandler((event.target as HTMLInputElement).value);
	};

	return (
		<StyledInput
			placeholder="search"
			value={inputValue}
			onChange={handleChange}
		/>
	);
};

export default Search;

/*

import React, { useState, useEffect } from 'react';

interface DebouncedInputProps {
  onChange: (value: string) => void;
}

const DebouncedInput: React.FC<DebouncedInputProps> = ({ onChange }) => {
  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
    const timerId = setTimeout(() => {
      onChange(inputValue);
    }, 1500); // Hardcoded delay of 1500ms

    return () => {
      clearTimeout(timerId);
    };
  }, [inputValue, onChange]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <input
      type="text"
      value={inputValue}
      onChange={handleInputChange}
      placeholder="Type here..."
    />
  );
};

export default DebouncedInput;




interface DebouncedInputProps {
  onChange: (value: string) => void;
}



const DebouncedInput: React.FC<DebouncedInputProps> = ({ onChange }) => {
  const { value, onChange: handleInputChange } = useDebouncedInput(onChange, 1500);

  return (
    <input
      type="text"
      value={value}
      onChange={handleInputChange}
      placeholder="Type here..."
    />
  );
};

export default DebouncedInput;

*/
