import React from 'react';
import { Switch, Route, Link, withRouter } from 'react-router-dom';
import { NavBar, Counter, Things, Home } from './components'
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  render() {
    return (
      <>
        
        <NavBar /> 
        <br/>

        {/* Routes */}

        <Switch>
          {/* <Route exact path="/" render={() => <p>Welcome</p> }/> */}

          <Route exact path="/" component={ Home }/>

          <Route path="/counter" component={ Counter } />

          <Route path="/things" component={ Things } />
        </Switch>


      </>
    );
  }
}

export default App;
