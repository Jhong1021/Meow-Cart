
import './App.css';
import Home from './component/Home';
import Banner from './component/Banner';
import Product from './component/Product';
import Navbar from './component/Navbar';
import Contact from './component/Contact';
import Blog from './component/Blog';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Banner />
      <Product />
      <Contact />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
