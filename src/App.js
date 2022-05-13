import { Component } from 'react';
import './App.css';
import BurgerBuilder from './components/containers/BurgerBuilder/BurgerBuilder';
import Layout from './components/Layout/layout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Black Star Burger</h1>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}
export default App
