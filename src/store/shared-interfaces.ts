export interface IDishAction {
  type: string;
  payload: IDishPayload;
}

export interface IDishPayload {
  imgUrl: string;
  title: string;
}
