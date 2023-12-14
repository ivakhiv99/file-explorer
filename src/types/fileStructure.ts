type Item = {
	isFile: boolean
	name: string
	extension?: string
	children?: null | Item[]
}

export default Item
