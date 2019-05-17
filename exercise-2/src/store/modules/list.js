function initialState() {
    return {
        items: [
            {
                checked: true,
                text: 'item 1'
            },
            {
                checked: false,
                text: 'item 2'
            }
        ]
    };
}

const state = initialState();

const actions = {};

const mutations = {};

const getters = {};

export default {
    state,
    actions,
    mutations,
    getters
};
