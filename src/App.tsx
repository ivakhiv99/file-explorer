import Drawer from '@mui/material/Drawer'
import { Item } from './types/fileStructure'
import { FileItem, FolderItem } from './components'
import mockFileStructure from './mockData'
import { styled } from 'styled-components'

const Wrapper = styled.div`
	height: 100%;
	width: 100%;
`

const FileTreeWrapper = styled.div`
	padding-left: 30px;
`

function App() {
	return (
		<Wrapper>
			{' '}
			<Drawer
				sx={{
					width: 300,
					flexShrink: 0,
					'& .MuiDrawer-paper': {
						width: 300,
						boxSizing: 'border-box',
					},
				}}
				variant="permanent"
				anchor="left"
			>
				<FileTreeWrapper>
					{mockFileStructure.map((item: Item) =>
						item.isFile ? (
							<FileItem {...item} />
						) : (
							<FolderItem {...item} />
						)
					)}
				</FileTreeWrapper>
			</Drawer>
		</Wrapper>
	)
}

export default App

//npx prettier . --write

// TODO:
// 1 - define types for backend response with files and folders---------------// DONE
//  1.1 - simulate request to backend (optional)
//
// 2 - render tree of items---------------------------------------------------// DONE
//  2.1 - use different icons for files and folders---------------------------// DONE
//  2.2 - add arrow icon for folders with children----------------------------// DONE
//
// 3 - make folders with children clickable and display it's children---------// DONE
//  3.1 - animate arrow icons for clickable folders (optional)
//
// 4 - add search input for files and folders
//  4.1 - debounce the input (optional)
//  4.2 - write a hook for searching files/folders
//	4.3 - display expanded folder if it has children
//  4.4 - display path to found file/folder as a seppareate string/component
//  4.5 - display "nothing found" message
//
// 5 - style all of this
//  5.1 - add linter and pritter (optional) ---------------------------------// kinda Done // still having isses forcing prettier to format on save
//  5.2 - host on gh-pages (optional)
