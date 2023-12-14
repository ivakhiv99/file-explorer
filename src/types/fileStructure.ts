export type Item = {
	isFile: boolean
	name: string
	extension?: string
	children?: null | Item[]
}

export type File = Omit<Item, 'isFile' | 'children'>
export type Folder = Omit<Item, 'isFile' | 'extension'>
