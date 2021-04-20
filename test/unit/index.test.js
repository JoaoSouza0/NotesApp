import { shallowMount, createLocalVue } from '@vue/test-utils'
import appAddCollection from '@/components/appAddCollection.vue'
import Vuex from 'vuex'
import { create } from 'core-js/core/object'

describe('Open Modal', () => {

    const localVue = createLocalVue()
    localVue.use(Vuex)

    let action, store
    const wrapper = shallowMount(appAddCollection)
    test('checando se tem o um botão', () => {
        expect(wrapper.html()).toContain('h4')
    })
})