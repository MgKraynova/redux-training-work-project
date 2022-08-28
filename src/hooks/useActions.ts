import {useDispatch} from "react-redux";
import bindActionCreators from "react-redux/es/utils/bindActionCreators";
import * as actionCreators from '../store/action-creators';


export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(actionCreators, dispatch);
}