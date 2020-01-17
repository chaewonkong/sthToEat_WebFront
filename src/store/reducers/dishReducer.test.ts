import dishReducer from "./index";
import * as constants from "../actions/constants";

describe("dishReducer", () => {
  it("Adds dish to like list", () => {
    const payload = { title: "마라탕", imgUrl: "img" };

    expect(
      dishReducer(undefined, { type: constants.LIKE_DISH, payload })
    ).toEqual({ dislikeList: [], likeList: [payload] });
  });
});
