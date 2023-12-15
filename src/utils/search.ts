import { Item } from "../types/fileStructure";

const search = (data: Item[], query: string): Item | null  => {

    let res: Item | null = null;

    for(let item of data) {
        if (item.name === query) {
            res = item;
            break;
        } else if (item.children) {
            res = search(item.children, query)
            if(res !== null) break;
        }
    }

    return res;
};

export default search;
