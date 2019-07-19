import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from "./Components/Menu/Menu";
import Header from "./Components/Header/Header";
import { Switch, Route } from 'react-router-dom'
import Travelpayouts from "./Components/Travelpayouts/Travelpayouts";
import Fetch from "./Components/Fetch/Fetch";
import ToDoList from "./Components/ToDoList/ToDoList";

// const Main = () => (
//   <main>

//   </main>
// )


  class App extends Component {

    constructor() {
      super()
    }
    render() {

    return (
      <div className="page_wrapper">
        <div className='a'>
          <Menu/>
        </div>
        <div className='Content'>
          <Header/>
          <div className='Content-page'>
                <Switch>
                  <Route exact path='/' component={Travelpayouts}/>
                  <Route exact path='/fetch' component={Fetch}/>
                  <Route exact path='/todo' render={(props) => (<ToDoList {...props}/>)}/>
                </Switch>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
