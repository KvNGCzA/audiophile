import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';
import Category from './views/category';
import Checkout from './views/checkout';
import Footer from './components/footer';
import Header from './components/header';
import Home from './views/home';
import Product from './views/product';

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
        <Route path='/checkout'>
          <Checkout />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </div>
);

export default App;
