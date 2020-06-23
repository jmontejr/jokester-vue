const URL_BASE_JOKES_API = 'https://official-joke-api.appspot.com/jokes';

import MutationTypes from './mutation-types';

const jokes = {
    [MutationTypes.INIT_JOKES]: ({ commit }) => {
        fetch(`${URL_BASE_JOKES_API}/ten`, { methods: 'GET' })
        .then(response => response.json())
        .then(json => {
            commit(MutationTypes.INIT_JOKES, json)
        })
        .catch(error => console.error(error));
    },
    
    [MutationTypes.ADD_JOKE]: ({ commit }) => {
        fetch(`${URL_BASE_JOKES_API}/random`, { methods: 'GET' })
            .then(response => response.json())
            .then(json => {
                commit(MutationTypes.ADD_JOKE, json)
            })
            .catch(error => console.error(error));
    }
}

export default {
    ...jokes
};
