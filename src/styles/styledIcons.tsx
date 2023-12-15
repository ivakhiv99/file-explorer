import { styled } from 'styled-components';
import ClearIcon from '@mui/icons-material/Clear';
import FolderIcon from '@mui/icons-material/Folder';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

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

const StyledClearIcon = styled(ClearIcon)`
	position: relative;
	right: 25px;
	width: 15px;
	height: 15px;
`;

const StyledFolderIcon = styled(FolderIcon)`
	margin: 0 5px;
`;

const StyledFileIcon = styled(InsertDriveFileIcon)`
	margin: 0 5px;
`;

export { StyledClearIcon, StyledFolderIcon, StyledFileIcon, ClosedArrow,  OpenArrow };
