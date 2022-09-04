import {useDispatch} from "react-redux";
import bindActionCreators from "react-redux/es/utils/bindActionCreators";

export const useActions = (actionCreators: any) => {
    const dispatch = useDispatch();

    // @ts-ignore
    return bindActionCreators(actionCreators, dispatch);
}