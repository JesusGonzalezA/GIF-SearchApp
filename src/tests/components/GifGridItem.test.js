import { shallow } from "enzyme"
import React from 'react'
import {GifGridItem} from '../../components/GifGridItem'


describe('Components -> GifGridItem', () => {

    const title = "Example title";
    const url = "Example url";
    const wrapper = shallow(<GifGridItem title={title} url={url}/>)

    test('should show the component correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should have a paragraph with the title', () => {
        const p = wrapper.find('p')
        expect( p.text().trim() ).toBe( title ) 
    })

    test('should have an image with the url and alt from the props', () => {
        const img = wrapper.find('img')

        expect ( img.prop('src') ).toBe(url)
        expect ( img.prop('alt') ).toBe(title)
    })

    test('should have css class animate__bounceIn', () => {
        const div = wrapper.find('div')

        const classes = div.prop('className')

        expect ( classes.includes('animate__bounceIn') ).toBe(true);
    })
    
    
    
})
