import { FC, useState } from 'react'
import Item from '../types/fileStructure'
import styled from 'styled-components'
import FolderIcon from '@mui/icons-material/Folder'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile'
import Typography from '@mui/material/Typography'
import { CustomIcon } from '../utils'
import ArowIcon from './ArowIcon'

const ItemWrapper = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
`

const ChildrenWrapper = styled(ItemWrapper)`
	padding-left: 30px;
	/* background-color: #cbc9c9; */
`

const FlexRow = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
`
//TODO: split into two components for files and folders
const FileTreeItem: FC<Item> = ({
	name,
	isFile,
	extension = null,
	children = null,
}) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	return (
		<ItemWrapper>
			<FlexRow>
				{!isFile && children?.length ? <ArowIcon /> : null}
				<CustomIcon>
					{isFile ? <InsertDriveFileIcon /> : <FolderIcon />}
				</CustomIcon>
				<Typography variant="body1" gutterBottom>
					{isFile ? `${name}.${extension}` : name}
				</Typography>
			</FlexRow>

			<ChildrenWrapper>
				{(children || []).map((item: Item) => (
					<FileTreeItem {...item} />
				))}
			</ChildrenWrapper>
		</ItemWrapper>
	)
}

export default FileTreeItem
