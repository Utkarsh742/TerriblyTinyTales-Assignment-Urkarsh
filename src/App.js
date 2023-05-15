import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import WordAnalyzer from './Components/WordAnalyser/WordAnalyzer';
import Home from './Components/Home/HomePage';

function App() {
  return (

    <Router>
    <Routes>
    <Route path="/" element={<Home/>}/>
   <Route path="/word-analyzer" element={<WordAnalyzer/>}/>
    </Routes>
    </Router>
  );
}

export default App;
