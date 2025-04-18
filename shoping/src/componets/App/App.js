import logo from './logo.svg';
import './App.css';
import '../../style.css'
import React, { Component } from 'react';
import NumberOne from '../NumberOne';
import Header from '../Header/Header';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';
// import {render} from '@testing-library/react';
class App extends Component{
  render(){
    return(
      <div className='App'>
        <div className='container'>
          <div className='row'> 
           <NumberOne tieude ="San pham so 1" linkanh="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOEsRObwf7SjkJ60fp4yOP9QM183j4dlTjnQ&s"></NumberOne>
            <NumberOne tieude ="San pham so 2" linkanh="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOEsRObwf7SjkJ60fp4yOP9QM183j4dlTjnQ&s"></NumberOne>
            <NumberOne tieude ="San pham so 3" linkanh="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOEsRObwf7SjkJ60fp4yOP9QM183j4dlTjnQ&s"></NumberOne>
            <NumberOne tieude ="San pham so 4" linkanh="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOEsRObwf7SjkJ60fp4yOP9QM183j4dlTjnQ&s"></NumberOne>
            <NumberOne tieude ="San pham so 5" linkanh="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOEsRObwf7SjkJ60fp4yOP9QM183j4dlTjnQ&s"></NumberOne> 
            <Header/>
            <Content/>
            <Footer/>
          </div>
        </div>
       </div>
    )
  }
}
export default App;