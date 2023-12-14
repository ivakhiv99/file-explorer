import './App.css'
import Item from './types/fileStructure'


const mockFileStructure: Item[] = [
  {
    isFile: false,
    name: 'Level 1',
    children: [
      {
        isFile: false,
        name: 'Level 2',
        children: null,
      }
    ]
  },
]


function App() {

  return (
    <>
      
    </>
  )
}

export default App
