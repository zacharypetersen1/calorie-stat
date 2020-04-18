import React, { Component } from 'react'

export default class FoodSearch extends Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor='foodName'>Food Name</label>
          <input type='text' id='foodName'/>
          <input type='button' value='Search'/>
        </form>
      </div>
    )
  }
}
