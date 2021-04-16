import axios from "axios";

export const state = () => ({
    isActiveModal: false,
    id: 0,
    collections: [],
})

export const getters = {

    qtCollections(state) {
        return (state.collections.length + 1)
    },

}

export const mutations = {
    activeModal(state, isActiveModal) {

        state.isActiveModal = isActiveModal.active
        state.id = isActiveModal.id === 0 ? 0 : isActiveModal.id

    },
    createCollections(state, collections) {
        state.collections = collections
    },
    addCollection(state, collection) {
        state.collections.push(collection)
    },
    deleteCollections(state, collection) {
        const newState = state.collections.filter(item => {
            return item.id != collection
        })
        state.collections = newState
    },
    editCollection(state, collection) {
        /* fazer um map no qual adiciona a nova collection no lugar da antiga */
        const newCollections = state.collections.map((item) => {
            return item.id !== collection.id ? item : collection
        })
        state.collections = newCollections
    }

}

export const actions = {
    async getCollections(context) {
        try {
            const res = await axios.get("http://localhost:8000/collections");
            context.commit('createCollections', res.data)
        } catch (err) {
            console.log(err);
        }
    },

    async postCollection(context, collection) {
        try {
            await axios.post("http://localhost:8000/collections", collection);
            context.commit('addCollection', collection)
        } catch (error) {
            console.log(error)
        }
    },
    async deleteCollection(context, collection) {
        try {
            await axios.delete(`http://localhost:8000/collections/${collection}`);
            context.commit('deleteCollections', collection)

        } catch (error) {
            console.log(error)
        }
    },
    async putCollection(context, collection) {
        try {
            await axios.put(`http://localhost:8000/collections/${collection.id}`, collection);
            context.commit('editCollection', collection) 

        } catch (error) {
            console.log(error)
        }
    },

    toggleModal(context, isActive) {
        context.commit('activeModal', isActive)
    }
}


