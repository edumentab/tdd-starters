function initialState() {
    return {
        next: '',
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

const actions = {
    async onUpdateNext({commit}, payload) {
        // TODO: Replace me
    },

    async onAddNewItem({commit}, payload) {
        // TODO: Replace me
    },

    async onToggleItem({commit}, index) {
        // TODO: Replace me
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
