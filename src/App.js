import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BooksGallery from "./components/BooksGallery/booksgallery"
import Reviews from './components/Reviews/fetchReviews';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';


function App() {
  return (
    <Router>
      <Header></Header>
      <div>
        <Routes>
          <Route path="/" element={<BooksGallery />} />
          <Route path="/reviews" element={<Reviews />} />

        </Routes>
      </div>
      <Footer></Footer>
    </Router>
  );
}
export default App;



