import { FC } from 'react';
import { Item } from '../types/fileStructure';
import FileItem from './FileItem';
import FolderItem from './FolderItem';

interface IFileTree {
	fileSctructure: Item[];
}

const FileTree: FC<IFileTree> = ({ fileSctructure }) => {
	return fileSctructure.map((item: Item) =>
		item.isFile ? (
			<FileItem {...item} key={item.name} />
		) : (
			<FolderItem {...item} key={item.name} />
		)
	);
};

export default FileTree;
