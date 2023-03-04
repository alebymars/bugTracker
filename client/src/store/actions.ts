import {createAction} from "@snolly/context-store";

export const setUser = createAction<{
    id: string;
    email: string;
    profilePicture: string;
    isAuth: boolean;
    token: string;
}>()("setUser");