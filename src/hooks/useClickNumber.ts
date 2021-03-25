import { useDispatch } from "react-redux";
//types
import { AppDispatch } from "../stores/rootReducer";

interface Props {
  reducer: any;
  payload?: number;
}

export const useClickNumber = (props: Props): (() => void)[] => {
  const { reducer, payload } = props;
  const dispatch = useDispatch<AppDispatch>();

  const useClick = () => {
    if (payload) {
      dispatch(reducer({ value: payload }));
    } else {
      dispatch(reducer());
    }
  };

  return [useClick];
};
