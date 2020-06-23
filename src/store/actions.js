const URL_JOKES = 'https://official-joke-api.appspot.com/jokes/ten';

import MutationTypes from './mutation-types';

const jokes = {
    [MutationTypes.INIT_JOKES]: ({ commit }) => {
        fetch(URL_JOKES, { methods: 'GET' })
        .then(response => response.json())
        .then(json => {
            commit(MutationTypes.INIT_JOKES, json)
        })
        .catch(error => console.error(error));
    }
}

export default {
    ...jokes
};
