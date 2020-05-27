import cart from "./cart.js";
import * as types from "../actions/types";

const initial = {
  items: new Set(),
  servings: new Map(),
};

const afterAdd = {
  items: new Set([555]),
  servings: new Map([[555, 1]]),
}

describe("cart reducer", () => {
  it("should return the initial state", () => {
    expect(cart(undefined, {})).toEqual(initial);
  });

  it("should handle ADD_TO_CART", () => {
    expect(
      cart(initial, {type: types.ADD_TO_CART, payload: 555})
    ).toEqual(afterAdd);
  });

  it("should handle REMOVE_FROM_CART", () => {
    expect(
      cart(afterAdd, {type: types.REMOVE_FROM_CART, payload: 555})
    ).toEqual(initial);
  });

  it("should handle CHANGE_SERVINGS", () => {
    expect(
      cart(afterAdd, {type: types.CHANGE_SERVINGS, id: 555, payload: 7})
    ).toEqual(
      { ...afterAdd, servings: new Map([[555, 7]]) }
    );
  });
});