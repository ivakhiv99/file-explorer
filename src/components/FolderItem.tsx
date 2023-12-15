import { FC, useState } from 'react';
import { Folder } from '../types/fileStructure';
import {
	ChildrenWrapper,
	FlexRow,
	ItemWrapper,
} from '../styles/FileTreeStyles';
import ArowIcon from './ArowIcon';
import FolderIcon from '@mui/icons-material/Folder';
import Typography from '@mui/material/Typography';
import FileTree from './FileTree';
import { styled } from 'styled-components';

const StyledFolderIcon = styled(FolderIcon)`
	margin: 0 5px;
`;

const FolderItem: FC<Folder> = ({ name, children }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const toggleFolder = () => setIsOpen(!isOpen);
	console.log({ name, isOpen });
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
