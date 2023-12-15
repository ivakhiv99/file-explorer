import { Item } from '../types/fileStructure';

type ReturnType = {
	result: Item | null;
	breadCrumbs: string;
};

//NOTE:	My search algoritm is ok for client side with moderate amount of data. Bigger json objects probably might take a while.
//		Possible way to speed this up might be to flatten tree into one array and then do quick search based on names?
//		That approach would require us to change the data as well. We'll need to have object feilds/properties for id's of parrent folder,
//		so we could reconstruct the hierarchy for render. Maybe store this data in a linked list? Haven't tried that, so i'm
//		not sure if added speed would make up for complexety, if it even would be any faster than current approach.
//
//		All that might be irrelevant because current system assumes all names are unique, but that's rearly the case with real
//		file systems.
//		In case of possible duplicate names this algorithm would need to go through all data every time.
//		That would be real issue for performance if we have large amounts of data.
//		My ideal way to optimise search would be to move it into backend side, so we could spit data and run paralel processes on smaller chunks of data.
//
//		Also option to specify search target type (file with specific extention or a folder) and search location would speed things up.

const search = (
	data: Item[],
	query: string,
	breadCrumbs: string
): ReturnType => {
	let result: Item | null = null;
	let path = breadCrumbs;

	for (let item of data) {
		if (item.name.toLowerCase() === query.toLowerCase()) {
			result = item;
			path = path.concat(item.name);
			if (item?.extension) {
				path = path.concat(`.${item.extension}`);
			}
			break;
		} else if (item.children) {
			const res = search(
				item.children,
				query,
				path.concat(`${item.name}/`)
			);
			result = res.result;
			if (result !== null) {
				path = res.breadCrumbs;
				break;
			}
		}
	}

	return { result, breadCrumbs: path };
};

export default search;
