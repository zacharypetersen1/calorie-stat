import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { setSearchQuery, search } from "../actions/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar() {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.search.query);
  const isLoading = useSelector((state) => state.search.isFetchingSearch);

  return (
    <div className="search-bar-container">
      <InputGroup className="mb-3">
        <FormControl
          className="search-bar"
          value={query}
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
          onKeyUp={(e) => {
            if (e.keyCode === 13) dispatch(search(query));
          }}
          placeholder="Apple, Oreo, Chicken..."
          aria-label="Apple, Oreo, Chicken..."
          tabIndex="1"
        />
        <InputGroup.Append>
          <Button 
            variant="outline-secondary" 
            onClick={() => dispatch(search(query))}
            className="search-bar"
            tabIndex="2"
          >
            {isLoading ? 
              <FontAwesomeIcon icon={faSpinner} spin /> :
              <FontAwesomeIcon icon={faSearch} />
            }

          </Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  )
}
