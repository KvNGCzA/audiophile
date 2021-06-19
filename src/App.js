import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';
import Header from './components/header';
import Home from './components/home';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
