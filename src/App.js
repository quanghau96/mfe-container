import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home'
const FrozenApp = React.lazy(() => import('./components/FrozenApp'))
const FriezaApp = React.lazy(() => import('./components/FriezaApp'))

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
      <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/frozen">frozen</Link>
            </li>
            <li>
              <Link to="/frieza">frieza</Link>
            </li>
          </ul>
        </nav>
          <hr />

          <React.Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/frieza" component={FriezaApp} />
              <Route path="/frozen" component={FrozenApp} />
              <Route path="/" component={Home} />
            </Switch>
          </React.Suspense>
      </header>
    </div>
    </BrowserRouter>
  );
   
}

export default App;
