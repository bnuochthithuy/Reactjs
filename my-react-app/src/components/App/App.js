import logo from './logo.svg';
import './App.css';
import React, { Component, components } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Content from '../Content/Content';
// import {render} from '@testing-library/react';
import State1 from '../../State/State1';
import Counter from '../../State/Counter_Class';
import Counter_function from '../../State/Counter_function';
import Dientich_hcn from '../../State/Dientich_hcn';
import Dientich_hcn_class from '../../State/Dientich_hcn_class';

class App extends Component {
  render() {
    return (
      <div id="container">
        <Dientich_hcn_class/>
        <Dientich_hcn/>
        <Counter_function/>
        <Counter/>
        <State1/>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}
export default App;