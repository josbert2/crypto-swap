import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavBar from "./Navbar";
import Info from './pages/info';
import Trade from './pages/trade';
import Farm from './pages/farms';
import Pool from './pages/pools'
import Nfa from './pages/nfa'
import Error from './pages/404'
import Home from './pages/home'
import Header from './pages/header'


// Assets
import './assets/css/app.css' 
import './assets/css/style.css'
import './assets/css/tailwind.min.css'


function App() {
  
  return (
    <BrowserRouter>
    <div class="page">
      
      <div className="dark">
        <NavBar />
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/info">
            <Info />
            </Route>
            <Route path="/trade">
              <Trade/>
            </Route>

            <Route path="/farms">
              <Farm/>
            </Route>
            <Route path="/pool">
              <Pool/>
            </Route>

            <Route path="/nfa">
              <Nfa/>
            </Route>


            <Route path="/404">
              <Error/>
            </Route>

          </Switch>
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
