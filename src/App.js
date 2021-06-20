import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';
import Footer from './components/footer';
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
        <Footer />
      </Router>
    </div>
  );
}

export default App;
