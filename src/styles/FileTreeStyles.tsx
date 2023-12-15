import { styled } from 'styled-components';

interface WrapperProps {
	isvisible?: string;
}

const ItemWrapper = styled.div<WrapperProps>`
	//stupid react warnings
	/* If you want to write it to the DOM, pass a string instead: isvisible="true" or isvisible={value.toString()} */
	display: ${({ isvisible }) => (isvisible === 'true' ? 'none' : 'flex')};
	flex-direction: column;
	position: relative;
`;

const ChildrenWrapper = styled(ItemWrapper)`
	padding-left: 30px;
`;

const FlexRow = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
`;

export { ItemWrapper, ChildrenWrapper, FlexRow };
