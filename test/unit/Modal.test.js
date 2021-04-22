import { mount, createLocalVue } from '@vue/test-utils'
import appAddCollection from '@/components/appAddCollection.vue'
import dropDownMenu from '@/components/dropDownMenu.vue'
import appModal from '@/components/appModal.vue'
import Vuex from 'vuex'

describe('testing Modal functions', () => {

    const localVue = createLocalVue()
    localVue.use(Vuex)
    let actions, store

    beforeEach(() => {
        actions = {
            "toggleModal": jest.fn().mockImplementation(() => {
            })
        };
        store = new Vuex.Store({
            modules: {
                // collections have to be configured as a namespaced module here
                collection: {
                    namespaced: true,
                    actions
                }
            }
        });
    });
    it('open mondal to add collection ', () => {

        const wrapper = mount(appAddCollection, {
            localVue,
            store,

        })

        const button = wrapper.find('button.addCollection')
        button.trigger('click')

        expect(actions["toggleModal"]).toHaveBeenCalled()
    })

    it('open mondal to edit collection ', () => {

        const wrapper = mount(dropDownMenu, {
            localVue,
            store,
            data() {
                return {
                    isOpen: true
                }
            }
        })

        const button = wrapper.find('button#edit')
        button.trigger('click')
        expect(actions["toggleModal"]).toHaveBeenCalled()

    })
    it('close mondal ',  () => {

        const wrapper = mount(appModal, {
            localVue,
            store,
        })

        const closeSection = wrapper.find('section.modal')
        closeSection.trigger('click')
        expect(actions["toggleModal"]).toHaveBeenCalled()
    })

    it('close mondal negative try',  () => {

        const wrapper = mount(appModal, {
            localVue,
            store,
        })

        const closeSection = wrapper.find('.modal-container')
        closeSection.trigger('click')
        expect(actions["toggleModal"]).not.toHaveBeenCalled()
    })
})

