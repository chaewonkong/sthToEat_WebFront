import * as constants from "./constants";
import { IDishPayload } from "../shared-interfaces";

export function likeDish(payload: IDishPayload) {
  return {
    type: constants.LIKE_DISH,
    payload
  };
}

export function dislikeDish(payload: IDishPayload) {
  return {
    type: constants.DISLIKE_DISH,
    payload
  };
}

export type DishAction =
  | ReturnType<typeof likeDish>
  | ReturnType<typeof dislikeDish>;
