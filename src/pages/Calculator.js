import React, { Component } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';

export default class Calculator extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Search/>
      </div>
    )
  }
}
