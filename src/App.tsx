import Drawer from '@mui/material/Drawer';
import { Item } from './types/fileStructure';
import { FileItem, FolderItem, Search } from './components';
import mockFileStructure from './mockData';
import { styled } from 'styled-components';
import { useEffect, useState } from 'react';
import { search } from './utils';

const Wrapper = styled.div`
	height: 100%;
	width: 100%;
`;

const FileTreeWrapper = styled.div`
	padding-left: 30px;
	padding-top: 20px;
`;

function App() {
	const [searchResult, setSearchResult] = useState<Item | null>(null);
	const [activeSearch, setActiveSearch] = useState<boolean>(false);

	const handleSearch = (value: string) => {
		if (value.length) {
			const res = search(mockFileStructure, value);
			setSearchResult(res);
			console.log('search result', res);
		}
	};

	const renderFileStructute = () => {
		const source = activeSearch ? searchResult : mockFileStructure;
		if (source && Array.isArray(source)) {
			return (
				source.map((item: Item) =>
					item.isFile ? (
						<FileItem {...item} key={item.name} />
					) : (
						<FolderItem {...item} key={item.name} />
					)
				)
			)
		}

	}

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
					<Search handler={handleSearch} />
					{renderFileStructute()}
				</FileTreeWrapper>
			</Drawer>
		</Wrapper>
	);
}

export default App;

//npx prettier . --write

// TODO:
// 1 - define types for backend response with files and folders---------------// DONE
//  1.1 - simulate request to backend (optional)
// 	1.2 - use uuid for files&folders id's
//
// 2 - render tree of items---------------------------------------------------// DONE
//  2.1 - use different icons for files and folders---------------------------// DONE
//  2.2 - add arrow icon for folders with children----------------------------// DONE
//
// 3 - make folders with children clickable and display it's children---------// DONE
//  3.1 - animate arrow icons for clickable folders (optional)
//	3.2 - fix the issue with top folder being opened from opening all other folders down the tree
//
// 4 - add search input for files and folders---------------------------------// DONE
//  4.1 - debounce the input (optional)---------------------------------------// DONE
//  4.2 - write a hook/func for searching files/folders
//	4.3 - display expanded folder if it has children
//  4.4 - display path to found file/folder as a seppareate string/component
//  4.5 - display "nothing found" message
//
// 5 - style all of this
//  5.1 - add linter and pritter (optional) ---------------------------------// kinda Done // still having isses forcing prettier to format on save
//  5.2 - host on gh-pages (optional)
