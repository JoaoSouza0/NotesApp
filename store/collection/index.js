import axios from "axios";

export const state = () => ({
    name: '',
    isActiveModal: false,
    collections: [],
})

export const mutations = {
    activeModal(state, isActiveModal) {
        state.isActiveModal = isActiveModal
    },
    addCollections(state, collections) {
        state.collections = collections
    },

}

export const actions = {
    async getCollections(context) {
        try {
            const res = await axios.get("http://localhost:8000/collections");
            console.log(res)
            //context.commit('addCollections', res.data)
            return res.data

        } catch (err) {
            console.log(err);
        }
    },
    toggleModal(context, isActive) {
        context.commit('activeModal', isActive)
    }
}


