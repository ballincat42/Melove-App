import './index.css'
import Sidebar from './components/Sidebar.jsx'
import Searchbar from './components/Searchbar.jsx'
function App() {
 
  return (
    <>
    <div className='flex w-[100%]'>
     <Sidebar/>
     <Searchbar/>
    </div>
    </>
  )
}

export default App
