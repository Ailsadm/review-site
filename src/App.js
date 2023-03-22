import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BooksGallery from "./components/BooksGallery/booksgallery"
import Reviews from './components/Reviews/fetchReviews';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
// import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarTest from "./components/Navbar/Navbar";


function App() {
  return (

    <Router>
      <Header></Header>
      <NavbarTest />

      <Routes>
        <Route path="/" element={<BooksGallery />} />
        <Route path="/reviews" element={<Reviews />} />
        {/* <Route path='/Navbar' element={<Navbar/>}/> */}

      </Routes>


      <Footer></Footer>

    </Router>
  );
}
export default App;



