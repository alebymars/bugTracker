import createStore, {ActionTypes} from "@snolly/context-store";
import * as actions from "./actions";

type ActionsTypes = ActionTypes<typeof actions>;

export const {StoreProvider, useSelector, useDispatch} = createStore(
    {
        user: {
            id: "",
            email: "",
            profilePicture: "",
            isAuth: false,
            token: ""
        },
    },
    (state, action: ActionsTypes) => {
        switch (action.type) {
            case "setUser": {
                state.user = action.payload;
                break;
            }
        }
        return state;
    },
    {
        persistent: {
            getData: (key) => {
                const data = localStorage.getItem(key);
                return data && JSON.parse(data)
            },
            setData: (key, data) => localStorage.setItem(key, JSON.stringify(data)),
        },
    }
);