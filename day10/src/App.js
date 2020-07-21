import React from 'react';
import NavigationBar from "./Components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Components/Footer/Footer";
import Items from "./Components/Items/Items";
import { Provider } from 'react-redux';
import {store} from "./redux/Store";
import MyCart from "./Components/MyCart/MyCart";
import './App.css';
import {BrowserRouter as Router,
        Switch,
        Route} from 'react-router-dom';
function App() {
  return (
      <div className='app-container'>
          <Provider store={store}>
              <Router>
                <NavigationBar/>
                <Switch>
                    <Route path={'/'} exact component={Items}/>
                    <Route path={'/cart'} component={MyCart}/>
                </Switch>
                <Footer/>
              </Router>
          </Provider>

      </div>

  );
}

export default App;
