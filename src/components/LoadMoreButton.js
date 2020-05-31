import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { loadMore } from "../actions/actions";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function LoadMoreButton() {
  const dispatch = useDispatch();
  const lastQuery = useSelector( (state) => state.search.lastQuery );
  const isLoadingMore = useSelector( (state) => state.search.isLoadingMore.get(lastQuery) );

  return (
    <Button 
      variant="outline-secondary"
      className="load-more-button"
      tabIndex="3"
      onClick={ () => {dispatch(loadMore(lastQuery))} }
    >
      {isLoadingMore ? <FontAwesomeIcon icon={faSpinner} spin /> : "Load More Results"}
    </Button>
  )
}
