import logo from './logo.svg';
import './App.css';
import ListEnseignantsComponent from "./component/ListEnseignantsComponent";
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
      <div>
        <Router>
          <HeaderComponent/>
          <div className="container">
            <Switch>
              <Route path="/enseignants" component={ListEnseignantsComponent}></Route>
            </Switch>
          </div>
          <FooterComponent/>
        </Router>
      </div>
  );
}

export default App;
