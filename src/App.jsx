import './index.css'
import Sidebar from './components/Sidebar.jsx'
import Searchbar from './components/Searchbar.jsx'
function App() {
 
  return (
    <>
    <div className='flex w-[100%]'>
    <Sidebar/>
    <div className='flex w-[80%] mx-auto justify-center'>
    <Searchbar/>
    </div>
    </div>
    </>
  )
}

export default App
