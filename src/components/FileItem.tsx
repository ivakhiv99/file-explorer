import { FC } from 'react';
import { File } from '../types/fileStructure';
import { FlexRow, ItemWrapper } from '../styles/FileTree';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import Typography from '@mui/material/Typography';
import { CustomIcon } from '../utils';

const FileItem: FC<File> = ({ name, extension }) => (
	<ItemWrapper>
		<FlexRow>
			<CustomIcon>
				<InsertDriveFileIcon />
			</CustomIcon>
			<Typography variant="body1" gutterBottom>
				{`${name}.${extension}`}
			</Typography>
		</FlexRow>
	</ItemWrapper>
);

export default FileItem;
