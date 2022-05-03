import logo from '../assets/logo.svg';
import '../styles/App.scss';
import Nav from '../components/Nav/Nav';
import HomePage from './Home/Home';
import AboutPage from './About/About';
import UserPage from './User/User';
import DetailUser from './Detail/DetailUser';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="body-app">
          <BrowserRouter>
          <Nav/>
            <Routes>
              <Route exact path="/" element={<HomePage/>} />
              <Route  path="about" element={<AboutPage/>} />
              <Route  path="user" exact element={<UserPage/>} />
              <Route  path="user/:id" element={<DetailUser/>} />
            </Routes>
          </BrowserRouter>
        </div>
    </div>
  );
}

export default App;
