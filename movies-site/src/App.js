import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import React from 'react'
import Login from './components/Login';
import Home from './components/Home';
import styled from 'styled-components';

const Header = styled.header`
  word-spacing: 20px;
  display: flex;
  background-color: lightgray;

`

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      movies: [
        {title: 'titles'}
      ]
    }
  }

  render() {
  return (
    <Router>
      <Header> GMBD
        <span><Link to='/'> Home</Link></span>
        <span><Link to='/Login'> Login</Link></span>
      </Header>

      <Switch>
        <Route exact path='/'><Home movies={this.state.movies}/></Route>
        <Route exact path='/Login'><Login /></Route>
      </Switch>
    </Router>
  );
}

}



export default App;
