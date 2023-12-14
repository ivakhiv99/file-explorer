import Drawer from '@mui/material/Drawer'
import './App.css'
import Item from './types/fileStructure'
import { FileTreeItem } from './components'
import mockFileStructure from './mockData'


function App() {

  return (
    <div className='wrapper'>
      <Drawer
        sx={{
          width: 300,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 300,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        {
          mockFileStructure.map((item: Item) => (
            <div>
              <FileTreeItem {...item}/>
            </div>
          ))
        }
      </Drawer>
    </div>
  )
}

export default App

// TODO:
// 1 - define types for backend response with files and folders
//  1.1 - simulate request to backend (optional)
// 
// 2 - render tree of items
//  2.1 - use different icons for files and folders
//  2.2 - add arrow icon for folders with children
// 
// 3 - make folders with children clickable and display it's children
//  3.1 - animate arrow icons for clickable folders
// 
// 4 - add search input for files and folders
//  4.1 - debounce the input (optional)
//  4.2 - display expanded folder if it has children
//  4.3 - display path to found file/folder as a seppareate string/component
//  4.4 - display "nothing found" message

