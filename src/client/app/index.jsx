import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Link, Switch } from 'react-router-dom';
//import { BrowserRouter } from 'react-router-dom'HashRouter
import QuizQuestions from './App';
import './index.css'; 
import NavBar from './main/Navbarpage.jsx'; 
import Login from './main/Login.jsx'; 
  
/*
const authenticate = (nextState, replace) => {
  if (!Meteor.loggingIn() && !Meteor.userId()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname },
    });
  }
};
*/

const Home = () => (
  <div>
    <h1>Welcome to Online Test Website</h1>
  </div>
)

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/login' component={Login}/>
      <Route path='/quiz' component={QuizQuestions}/>
    </Switch>
  </main>
)

/*
const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/login'>Schedule</Link></li>
      </ul>
    </nav>
  </header>
)
*/

const App = () => (
  <div>
    <NavBar />
    <Main />
  </div>
)

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'))

/*
ReactDOM.render(
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home1</Link></li>
                <li><Link to="/about">About1</Link></li>
                <li><Link to="/topics">Topics1</Link></li>
            </ul>

            <hr />

            <Route exact path="/" component={Login} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
        </div>
    </Router>
    , document.getElementById('root'));

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
)

const About = () => (
    <div>
        <h2>About</h2>
    </div>
)

const Topics = () => (
    <div>
        <h2>About</h2>
    </div>
)

*/