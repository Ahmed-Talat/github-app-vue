import { createStore } from "vuex";

export default createStore({
    state: {
        profiles: [],
    },
    mutations: {
        addNewProfile(state, profile) {
            state.profiles.push(profile);
        }
    }
});