import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import PageNotFound from './Pages/404page/PageNotFound';
import Footer from './Components/Footer/Footer';
import Services from './Pages/Services/Services';
import Trainer from './Pages/Trainer/Trainer';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <Route exact path='/about'>
              <About></About>
            </Route>
            <Route exact path='/services'>
              <Services></Services>
            </Route>
            <Route exact path='/instructor'>
              <Trainer></Trainer>
            </Route>
            <Route path='*'>
              <PageNotFound></PageNotFound>
            </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
