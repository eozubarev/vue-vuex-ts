import Vue from 'vue'
import Vuex, {Module, StoreOptions} from 'vuex'
import {RootState} from "./types";
import {user} from "./user";

const store: StoreOptions<RootState> = {
    state: {
        helloMessage: 'Hello World From Store'
    },
    modules: {
        user,
    }
}

export default new Vuex.Store<RootState>(store);