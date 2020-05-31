import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { loadMore } from "../actions/actions";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";

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
      <span className={ classNames({"hidden": isLoadingMore}) }>Load More</span>
      <FontAwesomeIcon className={ classNames("load-more-spinner", {"hidden": !isLoadingMore}) } icon={faSpinner} spin />
    </Button>
  )
}
