import { describe, expect, test } from "vitest";
import reducer, { setGood, getState } from "./unicafeSlice";

describe("unicafe reducer", () => {
  const previousState = { good: 0, ok: 0, bad: 0 };

  test("should return a proper initial state when called with undefined state", () => {
    expect(reducer(previousState, getState())).toEqual({
      good: 0,
      ok: 0,
      bad: 0,
    });
  });

  test("should handle setGood being added", () => {
    expect(reducer(previousState, setGood(1))).toEqual({
      good: 1,
      ok: 0,
      bad: 0,
    });
  });
});
