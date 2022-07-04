
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API;
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <Routes>
          <Route excat path="/" element={<News key="general" apiKey={this.apiKey} pageSize={6} country="in" category="general"/>}/>
          <Route excat path="/business"  element={<News key="business" apiKey={this.apiKey} pageSize={6} country="in" category="business"/>}/>
          <Route excat path="/entertainment"  element={<News key="entertainment" apiKey={this.apiKey} pageSize={6} country="in" category="entertainment"/>}/>
          <Route excat path="/health"  element={<News key="health" apiKey={this.apiKey} pageSize={6} country="in" category="health"/>}/>
          <Route excat path="/science"  element={<News key="science" apiKey={this.apiKey} pageSize={6} country="in" category="science"/>}/>
          <Route excat path="/sports"  element={<News key="sports" apiKey={this.apiKey} pageSize={6} country="in" category="sports"/>}/>
          <Route excat path="/technology"  element={<News key="technology" apiKey={this.apiKey} pageSize={6} country="in" category="technology"/>}/>
        </Routes>
        </Router>
      </div>
    )
  }
}

