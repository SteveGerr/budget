import Vue from "vue"; //Чтобы использовать функции vue в store

const budgetStore = {
    namespaced: true,

    state: {
        list: {
            1: {
              type: 'INCOME',
              value: 100,
              comment: "Some comm",
              id: 1
            },
            2: {
              type: 'OUTCOME',
              value: -50,
              comment: "Some comm 2",
              id: 2
            },
            3: {
              type: 'INCOME',
              value: 500,
              comment: "Some comm 3",
              id: 3
            }  
        }
    },

    getters: {
        budgetList: ({ list }) => Object.values(list),
    },

    mutations: {
        ADD_ITEM(state, item) {
            Vue.set(state.list, item.id, item)
        }
    },

    actions: {
        addNewItem({ commit }, item) {
            //Описываем данные
            const newItem = {
                ...item //поступит из компонента
            };
            // Вызываем мутацию, чтобы внести изменение в этот Store
            commit("ADD_ITEM", newItem);
        }
    },
}

export default budgetStore;
