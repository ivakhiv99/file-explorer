import { FC } from 'react';
import { Item } from '../types/fileStructure';
import FileItem from './FileItem';
import FolderItem from './FolderItem';

interface IFileTree {
	fileSctructure: Item[];
}

//NOTE: There's a mutual dependency between this component and FolderItem component.
//		Might not be a good thing, but in this project with it's small scope I'm not sure it's that big of an issue
const FileTree: FC<IFileTree> = ({ fileSctructure }) => {
	return fileSctructure.map((item: Item) =>
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
	);
};

export default FileTree;
