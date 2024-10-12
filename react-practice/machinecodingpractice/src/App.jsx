
import './App.css'
// import PaginationComponent from './components/Pagination/PaginationComponent'
import PaginationComponent from './components/simplepagination/PaginationComponent'
import DependentDropdowns from './components/dependentDropdown/DependentDropdowns'
import MultipleSelection from './components/multipleselection/MultipleSelection'
import SearchComponent from './components/debouncing/SearchComponent'
import ModalPopup from './components/modal/Modal'

function App() {
 

  return (
    <>
    <PaginationComponent/>
   <DependentDropdowns/>
   <MultipleSelection/>
   <SearchComponent/>
   <ModalPopup/>
    </>
  )
}

export default App
