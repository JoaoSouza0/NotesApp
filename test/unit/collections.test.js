import { mount, createLocalVue, RouterLinkStub } from "@vue/test-utils"
import header from '@/components/appHeader.vue'
import formCollection from "@/components/formCollection.vue"
import dropDownCollection from "@/components/dropDownCollection.vue"
import index from "@/pages/index.vue"
import Vuex from "vuex"

describe("Test the CRUD of collection", () => {

    const localVue = createLocalVue()
    localVue.use(Vuex)
    let actions, store

    beforeEach(() => {
        actions = {
            "getCollections": jest.fn().mockImplementation(() => {
            }),
            "postCollection": jest.fn().mockImplementation(() => {
            }),
            "deleteCollection": jest.fn().mockImplementation(() => {
            }),
            "putCollection": jest.fn().mockImplementation(() => {
            }),
            "toggleModal": jest.fn().mockImplementation(() => {
            }),
        };


        store = new Vuex.Store({
            modules: {
                // collections have to be configured as a namespaced module here
                collection: {
                    namespaced: true,
                    actions
                },
                modal: {
                    namespaced: true,
                    actions
                },

            }
        });

    });

    it("Creating a new collection", async () => {

        const wrapper = mount(formCollection, {
            localVue,
            store,
            computed: {
                idCollection: () => 0
            },
            data() {
                return {
                    name: "Test add Collection",
                }
            }
        })
        const button = wrapper.find("button#createCollection")
        button.trigger("click")
        expect(actions["postCollection"]).toHaveBeenCalled()
    })
    it("editing a new collection", () => {

        const wrapper = mount(formCollection, {
            localVue,
            store,
            computed: {
                idCollection: () => 1
            },
            data() {
                return {
                    name: "Test Edit Collection",
                }
            }
        })
        const button = wrapper.find("button#EditCollection")
        button.trigger("click")
        expect(actions["putCollection"]).toHaveBeenCalled()
        expect(actions["toggleModal"]).toHaveBeenCalled()
    })

    it("deleting a collection", () => {

        const wrapper = mount(dropDownCollection, {
            localVue,
            store,
            data() {
                return {
                    isOpen: true
                }
            }
        })

        const button = wrapper.find("button#deleteCollection")
        button.trigger("click")
        expect(actions["deleteCollection"]).toHaveBeenCalled()
    })

    it("getting collections when created", () => {

        const wrapper = mount(index, {
            localVue,
            store
        })

        expect(actions["getCollections"]).toHaveBeenCalled()
    })

});

describe('Test Header render', () => {
    it('header is redering', () => {
        const wrapper = mount(header, {
            stubs: {
                NuxtLink: RouterLinkStub
            }
        })
        expect(wrapper.find('header').vm).toBeTruthy()
    })
})