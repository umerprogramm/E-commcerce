import './App.css';
import Banner from './banner/Banner';
import Footer from './Footer/Footer';
import Nav from './Header/Nav'
import Merch from './Merch/Merch';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Merch/>
      <Footer/>
    </div>
  );
}

export default App;
