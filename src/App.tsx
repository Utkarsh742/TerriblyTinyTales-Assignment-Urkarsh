import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { StartScreen, WordAnalyzer } from './components';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<StartScreen />} />
          <Route path='/word-analyzer' element={<WordAnalyzer />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
