import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import Step1 from './pages/Step1';
import Step2 from './pages/Step2';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/step1">Step 1</Link>
            </li>
            <li>
              <Link to="/step2">Step 2</Link>
            </li>
          </ul>
        </header>

        <section className="App-content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/step1" element={<Step1 />} />
            <Route path="/step2" element={<Step2 />} />
          </Routes>
        </section>
      </Router>
    </div>
  );
}

export default App;
