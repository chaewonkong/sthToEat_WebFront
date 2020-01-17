import * as constants from "./constants";
import * as actions from "./dish";

it("creates an action to add dish to like list", () => {
  const selected = { title: "마라탕", imgUrl: "img" };
  const expectedAction = {
    type: constants.LIKE_DISH,
    payload: selected
  };

  expect(actions.likeDish(selected)).toEqual(expectedAction);
});

it("creates an action to add dish to dislike list", () => {
  const selected = { title: "마라탕", imgUrl: "img" };
  const expectedAction = {
    type: constants.DISLIKE_DISH,
    payload: selected
  };

  expect(actions.dislikeDish(selected)).toEqual(expectedAction);
});
