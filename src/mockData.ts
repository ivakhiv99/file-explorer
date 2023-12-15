import { Item } from './types/fileStructure';

const mockFileStructure: Item[] = [
	{
		isFile: false,
		name: '1A',
		children: [
			{
				isFile: false,
				name: '1A-2A',
				children: null,
			},
			{
				isFile: false,
				name: '1A-2B',
				children: [
					{
						isFile: false,
						name: '1A-2B-3A',
						children: null,
					},
					{
						isFile: true,
						name: '1A-2B-3B',
						extension: 'txt',
					},
				],
			},
		],
	},
	{
		isFile: false,
		name: '1B',
		children: [
			{
				isFile: false,
				name: '1B-2A',
				children: null,
			},
		],
	},
];

export default mockFileStructure;
