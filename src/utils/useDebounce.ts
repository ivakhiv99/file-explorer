import { useEffect, useState } from 'react';

const useDebouncedInput = (handler: (value: string) => void, delay: number) => {
	const [inputValue, setInputValue] = useState<string>('');

	useEffect(() => {
		const timer = setTimeout(() => handler(inputValue), delay);
		return () => clearTimeout(timer);
	}, [inputValue]);

	const handleInputChange = (value: string) => {
		setInputValue(value);
	};

	return {
		debouncedHandler: handleInputChange,
		inputValue,
	};
};

export default useDebouncedInput;
