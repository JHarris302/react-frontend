import React from 'react'
import logo from './logo.svg'
import Nav from './components/nav'
import {BrowserRouter, Route} from 'react-router-dom'
import Register from './components/register'

class App extends React.Component{

  state={
    user: {
      id: 1,
      username: 'JHarris302',
      password: 'password'
    }
  }

  render(){
    return (
          <BrowserRouter>
          
          <div className="App">
            <Nav user={this.state.user} />
            <header className="App-header">
              Welcome {this.state.user.username}
            </header>
            <Route path="/register" component={Register} user={this.state.user}/>
            <Route path="/login" component={Register} user={this.state.user}/>
            <Route path="/home" component={Register} user={this.state.user}/>
          </div>
          
          </BrowserRouter>
        );
    }
}


// function App() {
//   
// }
// import React from 'react';


// class nav extends React.Component{

//   render(){
//     return (
//         );
//     }
// }

export default App;
