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

// const useDebouncedInput = (onChange: (value: string) => void, delay: number) => {
//     const [inputValue, setInputValue] = useState<string>('');

//     useEffect(() => {
//       const timerId = setTimeout(() => {
//         onChange(inputValue);
//       }, delay);

//       return () => {
//         clearTimeout(timerId);
//       };
//     }, [inputValue, onChange, delay]);

//     const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//       setInputValue(event.target.value);
//     };

//     return {
//       value: inputValue,
//       onChange: handleInputChange,
//     };
//   };
