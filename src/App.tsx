import Drawer from '@mui/material/Drawer';
import { Item } from './types/fileStructure';
import { FileTree, Search } from './components';
import mockFileStructure from './mockData';
import { useState } from 'react';
import { search } from './utils';
import { FileTreeWrapper, ProjectWrapper } from './styles/fileTreeStyles';

function App() {
	const [searchResult, setSearchResult] = useState<Item | null>(null);
	const [breadcrumbs, setBreadCrumbs] = useState<string>('');
	const [activeSearch, setActiveSearch] = useState<boolean>(false);

	const handleSearch = (value: string) => {
		if (value.length) {
			setActiveSearch(true);
			const { result, breadCrumbs } = search(
				mockFileStructure,
				value,
				'./'
			);
			setBreadCrumbs(breadCrumbs);
			setSearchResult(result);
		} else {
			setActiveSearch(false);
			setSearchResult(null);
			setBreadCrumbs('');
		}
	};

	return (
		<ProjectWrapper>
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
					{activeSearch && searchResult === null && (
						<p>Nothing was found</p>
					)}
					{activeSearch && searchResult !== null && (
						<>
							<p>Path:</p>
							<p>{breadcrumbs}</p>
						</>
					)}
					<FileTree
						fileSctructure={
							activeSearch && searchResult != null
								? [searchResult]
								: mockFileStructure
						}
					/>
				</FileTreeWrapper>
			</Drawer>
		</ProjectWrapper>
	);
}

export default App;
