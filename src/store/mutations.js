import MutationTypes from './mutation-types.js';

const mutations = {
    [MutationTypes.INIT_JOKES] (state, payload) {
        state.jokes.push(...payload);
    },

    [MutationTypes.ADD_JOKE] (state, payload) {
        state.jokes.push(payload);
    },

    [MutationTypes.REMOVE_JOKE] (state, index) {
        state.jokes.splice(index, 1);
    },

    [MutationTypes.CLEAR_JOKES] (state) {
        state.jokes = [];
    },
};

export default mutations;
