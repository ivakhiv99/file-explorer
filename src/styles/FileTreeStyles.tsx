import Input from '@mui/material/Input';
import { styled } from 'styled-components';

const ProjectWrapper = styled.div`
	height: 100%;
	width: 100%;
`;

const FileTreeWrapper = styled.div`
	padding-left: 30px;
	padding-top: 20px;
`;

interface WrapperProps {
	isvisible?: string;
}

const ItemWrapper = styled.div<WrapperProps>`
	display: flex;
	flex-direction: column;
	position: relative;
`;

const ChildrenWrapper = styled(ItemWrapper)`
	padding-left: 30px;

	//stupid react warnings
	/* If you want to write it to the DOM, pass a string instead: isvisible="true" or isvisible={value.toString()} */
	display: ${({ isvisible }) => (isvisible === 'true' ? 'flex' : 'none')};
`;

const FlexRow = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
`;

const InputWrapper = styled.div`
	cursor: pointer;
	display: flex;
	flex-direction: row;
	justify-content: center;
`;

const StyledInput = styled(Input)`
	margin-bottom: 15px;
	padding: 0 5px;
`;

export {
	ItemWrapper,
	ChildrenWrapper,
	FlexRow,
	ProjectWrapper,
	FileTreeWrapper,
	InputWrapper,
	StyledInput,
};
