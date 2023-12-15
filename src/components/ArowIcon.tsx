import { FC } from 'react';
import { ClosedArrow, OpenArrow } from '../styles/styledIcons';

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
