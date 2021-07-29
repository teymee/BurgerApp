import React, {Component} from 'react';
import './App.css';
import Layout from './Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Burger from './components/Burger/Burger';

class App extends Component {
  render(){

    return (
      
      <Layout>
       <Burger />
       <BurgerBuilder/>
      </Layout>
      
    );
  }
  
}

export default App;
