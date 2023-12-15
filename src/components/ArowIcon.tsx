import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { FC } from 'react';
import styled from 'styled-components';

const ClosedArrow = styled(KeyboardArrowRightIcon)`
	cursor: pointer;
	position: absolute;
	left: -15px;
`;

const OpenArrow = styled(KeyboardArrowRightIcon)`
	cursor: pointer;
	position: absolute;
	left: -15px;
	transform: rotateZ(90deg);
	color: #999;
`;

interface IArowIcon {
	isOpen: boolean;
	onClick: () => void;
}

const ArowIcon: FC<IArowIcon> = ({ isOpen, onClick }) =>
	isOpen ? (
		<OpenArrow onClick={onClick} />
	) : (
		<ClosedArrow onClick={onClick} />
	);

export default ArowIcon;
