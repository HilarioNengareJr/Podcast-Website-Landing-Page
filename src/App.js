import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import NavBarMobile from './components/NavBarMobile';
import Hero from './components/Hero';
import Podcast from './components/Podcast';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import GoTo from './components/Goto';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar className='d-lg' />
        <NavBarMobile className='d-sm' />
        <main>
          <Hero />
          <Podcast />
          <Newsletter />
          <GoTo />
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
