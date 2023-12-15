import { FC, useState } from 'react';
import Typography from '@mui/material/Typography';
import { Folder } from '../types/fileStructure';
import {
	ChildrenWrapper,
	FlexRow,
	ItemWrapper,
} from '../styles/fileTreeStyles';
import { StyledFolderIcon } from '../styles/styledIcons';
import ArowIcon from './ArowIcon';
import FileTree from './FileTree';

const FolderItem: FC<Folder> = ({ name, children }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const toggleFolder = () => setIsOpen(!isOpen);
	return (
		<ItemWrapper>
			<FlexRow>
				{children?.length ? (
					<ArowIcon isOpen={isOpen} onClick={toggleFolder} />
				) : null}
				<StyledFolderIcon />
				<Typography variant="body1" gutterBottom>
					{name}
				</Typography>
			</FlexRow>
			<ChildrenWrapper isvisible={isOpen.toString()}>
				{children && <FileTree fileSctructure={children} />}
			</ChildrenWrapper>
		</ItemWrapper>
	);
};

export default FolderItem;
