import { styled } from 'styled-components';

const ItemWrapper = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
`;

const ChildrenWrapper = styled(ItemWrapper)`
	padding-left: 30px;
	/* background-color: #cbc9c9; */
`;

const FlexRow = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
`;

export { ItemWrapper, ChildrenWrapper, FlexRow };
