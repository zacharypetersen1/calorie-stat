import search from "./search";
import * as types from "../actions/types";

const initial = {
  resultCache: {},
  totalHits: {},
  query: "",
  lastQuery: "",
}

const afterCacheResults = {
  resultCache: {"apple": [151, 2412, 651]},
  totalHits: { "apple": 3 },
  query: "",
  lastQuery: "",
}

describe("search reducers", () => {

  it("should set initial state", () => {
    expect(search(undefined, {})).toEqual(initial);
  });

  it("should handle CACHE_SEARCH_RESULTS", () => {
    expect(search(initial, {
      type: types.CACHE_SEARCH_RESULTS, 
      query: "apple",
      totalHits: 3,
      payload: [
        { fdcId: 151 }, { fdcId: 2412 }, { fdcId: 651 },
      ]
    })).toEqual(afterCacheResults);
  });

  it("should handle SET_SEARCH_QUERY", () => {
    expect(
      search(initial, { type: types.SET_SEARCH_QUERY, payload: "banana" })
    ).toEqual(
      { ...initial, query: "banana" }
    );
  });

  it("should handle SET_LAST_QUERY", () => {
    expect(
      search(initial, { type: types.SET_LAST_QUERY, query: "banana" })
    ).toEqual(
      { ...initial, lastQuery: "banana" }
    )
  });

});
