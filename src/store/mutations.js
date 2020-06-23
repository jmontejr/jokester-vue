import MutationTypes from './mutation-types.js';

const mutations = {
    [MutationTypes.INIT_JOKES] (state, payload) {
        state.jokes.push(...payload);
    }
};

export default mutations;