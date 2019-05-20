import { getService } from '../../services/showSearch';

function initialState() {
    return {
        searchResult: []
    };
}

const state = initialState();

const actions = {
    onSearch({commit}, payload) {
        console.log(`onSearch triggered with the string "${payload}"`);
    }
};

const mutations = {
    updateSearch(state, payload) {
    }
};

export default {
    state,
    actions,
    mutations,
};
