import { Item } from '../types/fileStructure';

type ReturnType = {
	result: Item | null;
	breadCrumbs: string;
};

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
