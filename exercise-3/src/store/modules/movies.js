function initialState() {
    return {

    };
}

const state = initialState();

const actions = {
    onSearch({commit}, payload) {
        console.log('I should perform a search using an API');
    }
};

const mutations = {};
const getters = {};

export default {
    state,
    actions,
    mutations,
    getters
};
