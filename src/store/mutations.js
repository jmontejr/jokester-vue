import MutationTypes from './mutation-types.js';

const mutations = {
    [MutationTypes.INIT_JOKES] (state, payload) {
        state.jokes.push(...payload);
    },

    [MutationTypes.ADD_JOKE] (state, payload) {
        state.jokes.push(payload);
    }
};

export default mutations;