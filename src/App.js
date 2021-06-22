import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';
import Category from './components/category';
import Footer from './components/footer';
import Header from './components/header';
import Home from './components/home';
import Product from './components/product';

const App = () => (
  <div className='App'>
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/category/:name/:productSlug'>
          <Product />
        </Route>
        <Route path='/category/:name'>
          <Category />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </div>
);

export default App;
