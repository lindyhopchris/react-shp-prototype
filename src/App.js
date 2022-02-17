import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import "./App.css";

const Home = React.lazy(() => import('./pages/Home'));
const Step1 = React.lazy(() => import('./pages/Step1'));
const Step2 = React.lazy(() => import('./pages/Step2'));

function Loading() {
  return (
    <div>Loading...</div>
  );
}

function App({ basename }) {
  return (
    <div className="App">
      <Router basename={basename}>
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
            <Route exact path="/" element={
              <Suspense fallback={<Loading />}>
                <Home />
              </Suspense>
            } />
            <Route path="/step1" element={
              <Suspense fallback={<Loading />}>
                <Step1 />
              </Suspense>
            } />
            <Route path="/step2" element={
              <Suspense fallback={<Loading />}>
                <Step2 />
              </Suspense>
            } />
          </Routes>
        </section>
      </Router>
    </div>
  );
}

export default App;
