import * as constants from "./constants";
import * as actions from "./dish";

it("creates an action to add dish to selected list", () => {
  const selected = { title: "마라탕", imgUrl: "img" };
  const expectedAction = {
    type: constants.LIKE_DISH,
    selectedDishList: [selected]
  };

  expect(actions.likeDish(selected)).toEqual(expectedAction);
});
