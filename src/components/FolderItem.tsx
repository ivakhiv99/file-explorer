import { FC, useState } from 'react';
import { Folder, Item } from '../types/fileStructure';
import {
	ChildrenWrapper,
	FlexRow,
	ItemWrapper,
} from '../styles/FileTreeStyles';
import ArowIcon from './ArowIcon';
import { CustomIcon } from '../utils';
import FolderIcon from '@mui/icons-material/Folder';
import Typography from '@mui/material/Typography';
import FileTree from './FileTree';

const FolderItem: FC<Folder> = ({ name, children }) => {
	const [isOpen, setIsOpen] = useState<boolean>(true);

	const toggleFolder = () => setIsOpen(!isOpen);

	//TODO: use display none conditionaly instead of removing from dom
	return (
		<ItemWrapper>
			<FlexRow>
				{children?.length ? (
					<ArowIcon isOpen={isOpen} onClick={toggleFolder} />
				) : null}
				<CustomIcon>
					<FolderIcon />
				</CustomIcon>
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
