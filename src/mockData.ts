import { Item } from './types/fileStructure'

const mockFileStructure: Item[] = [
	{
		isFile: false,
		name: 'Level 1A',
		children: [
			{
				isFile: false,
				name: 'Level 2A1A',
				children: null,
			},
			{
				isFile: false,
				name: 'Level 2B1A',
				children: [
					{
						isFile: false,
						name: 'Level 3A2B1A',
						children: null,
					},
					{
						isFile: true,
						name: 'Level 3B2B1A',
						extension: 'txt',
					},
				],
			},
		],
	},
	{
		isFile: false,
		name: 'Level 1B',
		children: [
			{
				isFile: false,
				name: 'Level 2A1B',
				children: null,
			},
		],
	},
]

export default mockFileStructure
