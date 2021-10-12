import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Account from './pages/Account';
import Home from './pages/Home';
import Uploads from './pages/Uploads';
import Navigation from './components/Navigation';
import './App.css';
import Login from './pages/Login'

function App() {
  return (
    <>
        <Router>
            <Navigation />
            <Switch>
                <Route path="/" component={ Home } exact></Route>
                <Route path="/account" component={ Account }></Route>
                <Route path="/uploads" component={ Uploads }></Route>
                <Route path="/login" component={ Login }></Route>
            </Switch>
        </Router>
    </>
  );
}

export default App;
