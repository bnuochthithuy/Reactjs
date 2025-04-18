import logo from './logo.svg';
import './App.css';
import React, { Component, components } from 'react';
import Header from '../Header/Header';
import Footer from '../Header/Footer/Footer';
import Content from '../Content/Content';
import {render} from '@testing-library/react';


class App extends Component {
  render() {
    return (
      <div id="container">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}
export default App;