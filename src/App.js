import logo from './logo.svg';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import Signup from './SignUp';
import Login from './Login';
import Navbar from './Navbar';
import Home from './Home';
import Quiz from './Quiz';
import Progress from './Progress';
import Attemptquiz from './AttempedQuizez';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/Signup" component={Signup}/>
        <Route exact path="/" component={Login}/>
        <Route exact path="/Home" component={Home}/>
        <Route exact path="/Quiz" component={Quiz}/>
        <Route exact path="/Progress" component={Progress}/>
        <Route exact path="/Attemptquiz" component={Attemptquiz}/>
      </Switch>
    </div>
  );
}

export default App;
