import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";
import { likeDish, dislikeDish } from "../Store/actions/dish";
import { RootState } from "../Store/reducers/index";
import { IDishPayload } from "../Store/shared-interfaces";

export default function useDish() {
  const dish = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const onLikeDish = useCallback(
    (payload: IDishPayload) => dispatch(likeDish(payload)),
    [dispatch]
  );
  const onDislikeDish = useCallback(
    (payload: IDishPayload) => dispatch(dislikeDish(payload)),
    [dispatch]
  );

  return { dish, onLikeDish, onDislikeDish };
}
