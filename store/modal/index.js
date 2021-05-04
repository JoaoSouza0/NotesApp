
export const state = () => ({
    isActiveModal: false,
    id: 0,
})

export const mutations = {

    activeModal(state, isActiveModal) {
       
        state.isActiveModal = isActiveModal.active
        state.id = isActiveModal.id === 0 ? 0 : isActiveModal.id

    },
}

export const actions = {
   
    toggleModal(context, isActive) {
    
        context.commit('activeModal', isActive)
    }
}


