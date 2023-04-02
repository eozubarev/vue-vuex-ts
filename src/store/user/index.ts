import {Module} from "vuex";
import {RootState} from "../types";
import {UserState} from "./types";
import {getters} from "./getters";
import {mutations} from "./mutations";
import {actions} from "./actions";

const state: UserState = {
    username: 'Evgeny',
    email: 'test@mail.ru',
    lastLogin: new Date()
}

export const user: Module<UserState, RootState> = {
    // state: state
    state,
    getters,
    mutations,
    actions
}