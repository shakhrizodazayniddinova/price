import './App.css';
import './index.css'
import { Component } from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

class App extends Component {
  render(){
    return (
      <div>
        {/* hearder */}
        <Header/>
  
        {/* main */}
        <Main/>
  
        {/* footer */}
        <Footer/>
      </div>
    );
  }
}

export default App;
