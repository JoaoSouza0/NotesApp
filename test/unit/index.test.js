import { mount, createLocalVue } from '@vue/test-utils'
import appAddCollection from '@/components/appAddCollection.vue'
import Vuex from 'vuex'

describe('Open Modal', () => {

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
                collections: {
                    namespaced: true,
                    actions
                }
            }
        });
    });
    it('open mondal on click', async () => {

        const wrapper = mount(appAddCollection, {
            localVue,
            store,
        })

        const button = wrapper.find('button.addCollection')
        button.trigger('click')

        expect(actions["toggleModal"]).toHaveBeenCalled()
    })
})

