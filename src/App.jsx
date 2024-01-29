import './App.css';
import StarRating from './components/StarRating/StarRating';
import PopOver from './components/Popover/PopOver';
import Accordion from './components/Accordion/Accordion';
import Navbar from './components/Navbar/Navbar';
import Scroll from './components/Scroll/Scroll';
import AutoComplete from './components/AutoComplete/AutoComplete';
import Todo from './components/Todo/Todo';
import DebouncedSearchBar from './components/Debounce/Debounce';
import Poll from './components/Poll/Poll';

function App() {

  return (
    <>
      <DebouncedSearchBar />
    </>
  );
}

export default App;
