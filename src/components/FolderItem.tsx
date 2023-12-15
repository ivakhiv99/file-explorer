import { FC, useState } from 'react';
import { Folder, Item } from '../types/fileStructure';
import { ChildrenWrapper, FlexRow, ItemWrapper } from '../styles/FileTree';
import ArowIcon from './ArowIcon';
import { CustomIcon } from '../utils';
import FolderIcon from '@mui/icons-material/Folder';
import Typography from '@mui/material/Typography';
import FileItem from './FileItem';

const FolderItem: FC<Folder> = ({ name, children }) => {
	const [isOpen, setIsOpen] = useState<boolean>(true);

	const toggleFolder = () => setIsOpen(!isOpen);

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

			{isOpen && (
				<ChildrenWrapper>
					{(children || []).map((item: Item) =>
						item.isFile ? (
							<FileItem
								name={item.name}
								extension={item.extension}
								key={item.name}
							/>
						) : (
							<FolderItem
								name={item.name}
								children={item.children}
								key={item.name}
							/>
						)
					)}
				</ChildrenWrapper>
			)}
		</ItemWrapper>
	);
};

export default FolderItem;
