
import './App.css';
import { Footer } from './components/Footer/Footer';
import { Hompage } from './components/HomePage/HomePage';
import { Navbar } from './components/NavBar/navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
          <br/>
          <Hompage/>
      <Footer/>
    </div>
  );
}

export default App;
