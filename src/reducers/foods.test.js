import foods from "./foods";
import * as types from "../actions/types";

const initial = {
  cache: {},
}

const afterCache = {
  cache: { 
    555: { description: "foodName", brandOwner: "brand", },
    12345: { description: "foodName2", brandOwner: undefined, },
  },
}

describe("foods reducer", () => {

  it("should set initial state", () => {
    expect(
      foods(undefined, {})
    ).toEqual(initial);
  });

  it("should handle CACHE_SEARCH_RESULTS", () => {
    expect(
      foods(initial, { 
        type: types.CACHE_SEARCH_RESULTS, 
        payload: [
          { fdcId: 555, description: "foodName", brandOwner: "brand" },
          { fdcId: 12345, description: "foodName2" },
        ] 
      })
    ).toEqual(afterCache);
  });

});
