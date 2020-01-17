import * as constants from "./constants";

interface IPayload {
  imgUrl: string;
  title: string;
}

export function likeDish(payload: IPayload) {
  return {
    type: constants.LIKE_DISH,
    payload
  };
}

export function dislikeDish(payload: IPayload) {
  return {
    type: constants.DISLIKE_DISH,
    payload
  };
}
