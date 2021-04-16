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
    },
    deleteCollections(state, collection) {

        const newState = state.collections.filter(item => {
            return item.id != collection
        })
        state.collections = newState
    }

}

export const actions = {
    async getCollections(context) {
        try {
            const res = await axios.get("http://localhost:3000/collections");
            context.commit('addCollections', res.data)
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
    async deleteCollection(context, collection) {
        try {
            await axios.delete(`http://localhost:3000/collections/${collection}`);
            context.commit('deleteCollections', collection)

        } catch (error) {
            console.log(error)
        }
    },

    toggleModal(context, isActive) {
        context.commit('activeModal', isActive)
    }
}


