import React, { Component } from 'react';
import Header from '../components/Header';
import FoodSearch from '../components/FoodSearch';

export default class Calculator extends Component {
  render() {
    return (
      <div>
        <Header/>
        <FoodSearch/>
      </div>
    )
  }
}
