import React from 'react';
import './App.css';
import {searchFoods, getFoodData} from './script/httpFunctions';
import Calculator from './pages/Calculator';

searchFoods('Cheddar cheese');
getFoodData(574634);

function App() {
  return (
    <Calculator/>
  );
}

export default App;
