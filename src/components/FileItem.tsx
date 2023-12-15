import { FC } from 'react';
import { File } from '../types/fileStructure';
import { FlexRow, ItemWrapper } from '../styles/FileTreeStyles';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import Typography from '@mui/material/Typography';
import { styled } from 'styled-components';

const StyledFileIcon = styled(InsertDriveFileIcon)`
	margin: 0 5px;
`;

const FileItem: FC<File> = ({ name, extension }) => (
	<ItemWrapper>
		<FlexRow>
			<StyledFileIcon />
			<Typography variant="body1" gutterBottom>
				{`${name}.${extension}`}
			</Typography>
		</FlexRow>
	</ItemWrapper>
);

export default FileItem;
