import { mount, createLocalVue } from "@vue/test-utils"
import formNotes from "@/components/formNotes.vue"
import dropDownNotes from "@/components/dropDownNotes.vue"
import VueRouter from 'vue-router'

import index from "@/pages/collection/_id/index.vue"
import Vuex from "vuex"

describe("Test the CRUD of notes", () => {

    const localVue = createLocalVue()
    localVue.use(Vuex)

    const router = new VueRouter()

    let actions, store

    const $route = {
        path: 'pages/collection/',
        params: {
            id: '1'
        }
    }

    beforeEach(() => {
        actions = {
            "getNotes": jest.fn().mockImplementation(() => {
            }),
            "postNotes": jest.fn().mockImplementation(() => {
            }),
            "deleteNotes": jest.fn().mockImplementation(() => {
            }),
            "putNotes": jest.fn().mockImplementation(() => {
            }),
            "toggleModal": jest.fn().mockImplementation(() => {
            }),
            "getCollections": jest.fn().mockImplementation(() => {
            }),
        };

        store = new Vuex.Store({
            modules: {
                // collections have to be configured as a namespaced module here
                notes: {
                    namespaced: true,
                    actions
                },
                modal: {
                    namespaced: true,
                    actions
                },
                collection: {
                    namespaced: true,
                    actions
                },
            }
        });

    });

    it("Creating a new note", async () => {

        const wrapper = mount(formNotes, {
            localVue,
            store,
            router,
            mocks: {
                $route
            },
            computed: {
                idNote: () => 0
            },
            data() {
                return {
                    title: "",
                    content: "",
                    color: "#F0B3B2",

                }
            }
        })

        const button = wrapper.find("button#addNote")
        button.trigger("click")
        expect(actions["postNotes"]).toHaveBeenCalled()
    })

    it("editing a new note", () => {

        const wrapper = mount(formNotes, {
            localVue,
            store,
            router,
            mocks: {
                $route
            },
            computed: {
                idNote: () => 1
            },
            data() {
                return {
                    name: "Test Edit Collection",
                }
            }
        })
        const button = wrapper.find("button#editNotes")
        button.trigger("click")
        expect(actions["putNotes"]).toHaveBeenCalled()
        expect(actions["toggleModal"]).toHaveBeenCalled()
    })

    it("deleting a note", () => {

        const wrapper = mount(dropDownNotes, {
            localVue,
            store,
            data() {
                return {
                    isOpen: true
                }
            }
        })

        const button = wrapper.find("button#deleteButton")
        button.trigger("click")
        expect(actions["deleteNotes"]).toHaveBeenCalled()
    })

    it("getting notes when created", () => {

        const wrapper = mount(index, {
            localVue,
            store,
            router,
            mocks: {
                $route
            }
        })
        
        expect(actions["getNotes"]).toHaveBeenCalled()
    })
    it("getting notes when update", () => {

        const wrapper = mount(index, {
            localVue,
            store,
            router,
            mocks: {
                $route
            }
        })
        wrapper.vm.$forceUpdate()
        expect(actions["getNotes"]).toHaveBeenCalled()
    })

    it("getting collections when created", () => {

        const wrapper = mount(formNotes, {
            localVue,
            store,
            router,
            mocks: {
                $route
            }
        })
    
        expect(actions["getCollections"]).toHaveBeenCalled()
    })

});
