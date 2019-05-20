import { showSearch } from '../../services/showSearch';

function initialState() {
    return {
        searchResult: []
    };
}

const state = initialState();

const actions = {
    async onSearch({commit}, payload) {
        const result = await showSearch().query(payload);
        commit('updateSearch', result);
    }
};

const mutations = {
    updateSearch(state, payload) {
        state.searchResult = payload.map(entry => ({
            ...entry,
            rating: {
                ...entry.rating,
                class: entry.rating.percentage >= 50 ?
                    'good' :
                    'bad',
            }
        }));
    }
};

const getters = {};

export default {
    state,
    actions,
    mutations,
    getters
};
