import axios from "axios";

const state = {
    settings: {
        title:'Custom title 2'
    }
};

//getters
const getters = {
    //Вся корзина целиком
    getSettings: function (state) {
        return state.settings;
    }
};
//mutations
const mutations = {
    setSettings: function (state, data) {
        state.settings = data;
    }
};
const actions = {
    
    load: function ({commit}) {
        axios.get('/api/settings/').then(response => {
            commit('setSettings', response.data);
        }).catch(e=> {
            console.warning(e);
        });
    }
};
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}