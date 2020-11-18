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


    // В мутациях инициируем то, что должно произойти
    mutations: {
        ADD_ITEM(state, item) {
            //глобальный метод
            // где меняем, какое свойство, на какое свойство
            Vue.set(state.list, item.id, item)
        }
    },
    //В экшонах вызываем, запускаем само изменение
    actions: {
        addNewItem({ commit }, item) {
            //Описываем данные
            const newItem = {
                ...item, //поступит из компонента
                id: Number(Math.random())
            };
            // Вызываем мутацию, чтобы внести изменение в этот Store
            commit("ADD_ITEM", newItem);
        }
    },
}

export default budgetStore;
