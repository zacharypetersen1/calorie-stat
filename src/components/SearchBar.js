import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { setSearchQuery } from "../actions/actions";
import { handleSearch } from "../scripts/eventHandlers";

export default function SearchBar() {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.search.query);

  return (
    <div className="search-bar-container">
      <div className="search-bar">
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Apple, Oreo, Chicken..."
          aria-label="Apple, Oreo, Chicken..."
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          <Button variant="outline-secondary">Button</Button>
        </InputGroup.Append>
      </InputGroup>
        {/*<input
          type="text"
          value={query}
          id="foodName"
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
          onKeyUp={(e) => {
            if (e.keyCode === 13) handleSearch();
          }}
        />
        <button type="button" onClick={() => handleSearch()}>
          S
        </button>*/}
      </div>
    </div>
  )
}
