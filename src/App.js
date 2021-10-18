import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import NotFound from './Pages/NotFound/NotFound';
import About from './Pages/About/About';
import Specialist from './Pages/Specialist/Specialist';
import Contact from './Pages/Contact/Contact';
import ServiceDetail from './Pages/Home/ServiceDetail/ServiceDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>

        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/servicedetail/:serviceID">
            <ServiceDetail></ServiceDetail>
          </Route>

          <Route path="/about">
            <About></About>
          </Route>

          <Route path="/specialist">
            <Specialist></Specialist>
          </Route>

          <Route path="/contact">
            <Contact></Contact>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <Signup></Signup>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>

        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
