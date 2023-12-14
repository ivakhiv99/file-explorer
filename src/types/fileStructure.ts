
type Item = {
    isFile: boolean;
    name: string;
    resolution?: string;
    children?: null | Item[];
}

export default Item;