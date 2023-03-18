import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BooksGallery from "./components/BooksGallery/booksgallery"
import Reviews from './components/Reviews/Reviews';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<BooksGallery />} />
          <Route path="/reviews" element={<Reviews />} />
          
        </Routes>
      </div>
    </Router>
  );
}
export default App;



