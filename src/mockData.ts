import Item from "./types/fileStructure";

const mockFileStructure: Item[] = [
    {
        isFile: false,
        name: 'Level 1 A',
        children: [
            {
                isFile: false,
                name: 'Level 2 A',
                children: null,
            },
            {
                isFile: false,
                name: 'Level 2 B',
                children: null,
            }
        ]
    },
    {
        isFile: false,
        name: 'Level 1 A',
        children: [
            {
                isFile: false,
                name: 'Level 2 AA',
                children: null,
            },
        ]
    },
];

export default mockFileStructure;
  