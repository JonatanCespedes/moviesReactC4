import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Create from './pages/Create';
import Home from './pages/Home';
import Edit from './pages/Edit';
import Signin from './pages/Signin';
import NotFound from './pages/NotFound';
import AuthProvider from './components/AuthProvider';
import ScrollToTop from './components/ScrollToTop';
import './App.css';



function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <Router>
        <Header />
        <ScrollToTop>
          <div className="container main-container">
            <Switch>
              <Route exact path="/">           
                  <Home />     
              </Route>
              <Route exact path="/edit/:id">         
                  <Edit />
              </Route>
              <Route exact path="/create">  
                  <Create />     
              </Route>
              <Route exact path="/signin">  
                  <Signin />
              </Route>
              <Route path="/*">
                <NotFound />
              </Route>
            </Switch>
          </div>
        </ScrollToTop>
        <Footer />
      </Router>
    </>
  );
}

export default App;
