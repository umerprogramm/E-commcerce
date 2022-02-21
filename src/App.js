import './App.css';
import Banner from './banner/Banner';
import Nav from './Header/Nav'
import Merch from './Merch/Merch';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Merch/>
    </div>
  );
}

export default App;
