import './App.css';
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BooksGallery from "./components/BooksGallery/booksgallery"
import FetchReviews from './components/Reviews/fetchReviews';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarTest from "./components/Navbar/Navbar";


function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    console.log('Search term:', searchTerm);
  };

  return (

    <Router>
      <Header />
      <NavbarTest onSearch={handleSearch} />

      <Routes>
        <Route path="/" element={<BooksGallery searchTerm={searchTerm} />} />
        <Route path="/reviews" element={<FetchReviews />} />
      </Routes>


      <Footer></Footer>

    </Router>
  );
}
export default App;



