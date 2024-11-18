import Head from "./components/Head";
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Head />
      <Navbar />
      <Contact />
    </div>
  );
}

export default App;
