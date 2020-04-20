import React, { Component } from 'react';
import Header from '../components/Header';
import SearchSection from '../components/SearchSection';

export default class Calculator extends Component {
  render() {
    return (
      <div>
        <Header/>
        <SearchSection/>
      </div>
    )
  }
}
