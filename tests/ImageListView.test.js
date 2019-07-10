import { shallowMount, createLocalVue } from '@vue/test-utils'
import ImageListView from '../src/components/ImageListView.vue'
import {Model, ImageUploadable} from '@team-decorate/alcjs'

const localVue = createLocalVue()

describe('test', () => {

    it('Confirming path', async () => {
        const wrapper = shallowMount(ImageListView, {
            propsData: {
                images: [{"path": '/images/test.png'}]
            },
            localVue
        })
        const props = wrapper.props().images[0]
        expect(props.path).toBe('/images/test.png')

    })

})
