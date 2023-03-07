import {createAction} from "@snolly/context-store";

export const setUser = createAction<{
    id: string;
    email: string;
    role: string;
    profilePicture: string;
    isAuth: boolean;
    token: string;
}>()("setUser");

// export const setReports =