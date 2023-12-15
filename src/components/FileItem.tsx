import { FC } from 'react';
import { File } from '../types/fileStructure';
import { FlexRow, ItemWrapper } from '../styles/fileTreeStyles';
import Typography from '@mui/material/Typography';
import { StyledFileIcon } from '../styles/styledIcons';

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
