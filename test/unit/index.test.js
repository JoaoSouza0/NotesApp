import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import appAddCollection from '@/components/appAddCollection.vue'
import { toggleModal } from "@/store/collection/index.js"
import Vuex from 'vuex'


describe('Open Modal', () => {

    const localVue = createLocalVue()
    localVue.use(Vuex)

    let actions, store

    beforeEach(() => {
        actions = {
            "toggleModal": jest.fn().mockImplementation(() => {
            }),
        };
        store = new Vuex.Store({
            actions
        });
    });
    it('open mondal on click', async () => {

        const wrapper = shallowMount(appAddCollection, {
            localVue,
            store,
        })

        //const button = wrapper.find('button')
        await wrapper.trigger('click')

        expect(actions["toggleModal"])
    })

})

