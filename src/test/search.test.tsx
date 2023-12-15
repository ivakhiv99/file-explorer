import { Item } from '../types/fileStructure';
import { search } from '../utils';

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
						children: [
							{
								isFile: false,
								name: '1A-2B-3A-4A',
								children: [
									{
										isFile: true,
										name: 'What a terrible naming convention for files and folders, right?',
										extension: 'png',
									},
								],
							},
							{
								isFile: false,
								name: '1A-2B-3A-4B',
								children: null,
							},
						],
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
			{
				isFile: false,
				name: '1B-2B',
				children: null,
			},
		],
	},
];

test('search function should return the correct file and breadcrumbs', () => {
	const result = search(mockFileStructure, '1A-2B-3B', './');

	expect(result.result).toEqual({
		isFile: true,
		name: '1A-2B-3B',
		extension: 'txt',
	});
	expect(result.breadCrumbs).toBe('./1A/1A-2B/1A-2B-3B.txt');
});

test('search function should be case insensitive', () => {
	const result = search(mockFileStructure, '1a-2b-3a-4B', './');

	expect(result.result).toEqual({
		isFile: false,
		name: '1A-2B-3A-4B',
		children: null,
	});
	expect(result.breadCrumbs).toBe('./1A/1A-2B/1A-2B-3A/1A-2B-3A-4B');
});

test('search function should return null as a result if it found nothing', () => {
	const result = search(
		mockFileStructure,
		'fictional file or maybe folder',
		'./'
	);

	expect(result.result).toBeNull();
});
