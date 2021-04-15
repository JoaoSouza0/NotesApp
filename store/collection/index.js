import axios from "axios";

export const state = () => ({
    name: '',
    isActiveModal: false,
    collections: [],
})

export const getters = {

    qtCollections(state) {
        return (state.collections.length + 1)
    }
}

export const mutations = {
    activeModal(state, isActiveModal) {
        state.isActiveModal = isActiveModal
    },
    addCollections(state, collections) {
        state.collections = collections
    },
    attCollections(state, collection) {
        state.collections.push(collection)
    }

}

export const actions = {
    async getCollections(context) {
        try {
            const res = await axios.get("http://localhost:3000/collections");
            context.commit('addCollections', res.data)
            return res.data

        } catch (err) {
            console.log(err);
        }
    },

    async postCollection(context, collection) {
        try {
            await axios.post("http://localhost:3000/collections", collection);
            context.commit('attCollections', collection)
        } catch (error) {
            console.log(err)
        }
    },

    toggleModal(context, isActive) {
        context.commit('activeModal', isActive)
    }
}


