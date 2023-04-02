import {ActionTree} from "vuex";
import {UserState} from "./types";
import {RootState} from "../types";

export const actions: ActionTree<UserState , RootState> = {
    loadAPIResult ({ commit }): any {
        return fetch(`https://jsonplaceholder.typicode.com/todos/1`).then(data => data.json()).then(data => {
            commit("SET_TODO", data)
            return data
        })
    }
}