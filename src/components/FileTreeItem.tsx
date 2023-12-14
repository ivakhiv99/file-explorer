import { FC } from 'react'
import Item from '../types/fileStructure'
import styled from 'styled-components'

const ItemWrapper = styled.div`
	display: flex;
	flex-direction: column;
`

const ChildrenWrapper = styled(ItemWrapper)`
	padding-left: 35px;
	background-color: #cbc9c9;
`

const FileTreeItem: FC<Item> = ({
	name,
	isFile,
	resolution = null,
	children = null,
}) => {

	return (
		<ItemWrapper>
			{name}
			<ChildrenWrapper>
				{(children || []).map((item: Item) => (
					<FileTreeItem {...item} />
				))}
			</ChildrenWrapper>
		</ItemWrapper>
	)
}

export default FileTreeItem;
