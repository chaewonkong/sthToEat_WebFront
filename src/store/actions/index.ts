export const LIKE_DISH = "LIKE_DISH";
export const DISLIKE_DISH = "DISLIKE_DISH";

interface IPayload {
  imgUrl: string;
  title: string;
}

export function likeDish(payload: IPayload) {
  return {
    type: LIKE_DISH,
    payload
  };
}

export function dislikeDish(payload: IPayload) {
  return {
    type: DISLIKE_DISH,
    payload
  };
}
