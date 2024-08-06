import './index.css'
import Sidebar from './components/Sidebar.jsx'
import Searchbar from './components/Searchbar.jsx'
import Pick from './components/Picks.jsx'
import Playercard from './components/Playercard.jsx'
function App() {
 
  return (
    <>
    <div className='flex w-[100%] h-screen bg-custom-gradient bg-no-repeat'>
     <Sidebar/>
     <div className='h-[100%] mx-auto flex flex-col gap-8 py-8'>
     <span className='gap-5 flex flex-col'>
       <Searchbar/>
       <div className="flex justify-between">
        <Pick/>
        <Playercard/>
        </div>
       </span>
     </div>
    </div>
    </>
  )
}

export default App
