import axios from "axios";

export const state = () => ({
    isActiveModal: false,
    id: 0,
    notes: [],
})
export const mutations = {
    activeModal(state, isActiveModal) {

        state.isActiveModal = isActiveModal.active
        state.id = isActiveModal.id === 0 ? 0 : isActiveModal.id
    },
    showNotes(state, notes) {
        state.notes = notes
    },
    addNotes(state, notes) {
        state.notes.push(notes)
    },
    deleteNotes(state, notes) {
        const newState = state.notes.filter(item => {
            return item.id != notes
        })
        state.notes = newState
    },
    editNotes(state, notes) {
        const newNotes = state.notes.map((item) => {
            return item.id !== notes.id ? item : notes
        })
        state.notes = newtes
    }

}

export const actions = {
    async getNotes(context, notesIdCollection) {
        try {
            const res = await axios.get(`http://localhost:8000/notes?collectionId=${notesIdCollection.id}`);
            context.commit('showNotes', res.data)
        } catch (err) {
            console.log(err);
        }
    },

    async postCollection(context, collection) {
        try {
            await axios.post("http://localhost:8000/notes", notes);
            context.commit('addnotes', notes)
        } catch (error) {
            console.log(error)
        }
    },
    async deleteNotes(context, noteId) {
        try {
            await axios.delete(`http://localhost:8000/notes/${noteId}`);
            context.commit('deleteNotes', noteId)

        } catch (error) {
            console.log(error)
        }
    },
    async putNotes(context, notes) {
        try {
            await axios.put(`http://localhost:8000/notess/${notes.id}`, notes);
            context.commit('editnotes', notes)

        } catch (error) {
            console.log(error)
        }
    },

    toggleModal(context, isActive) {
        context.commit('activeModal', isActive)
    }
}


