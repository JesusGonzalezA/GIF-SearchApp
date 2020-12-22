import { shallow } from "enzyme"
import React from 'react'
import GifExpertApp from '../GifExpertApp'

describe('GifExpertApp', () => {
    
    

    test('should match with the snapshot', () => {
        const wrapper = shallow(<GifExpertApp />)
        expect(wrapper).toMatchSnapshot(); 
    })

    test('should show a category list', () => {
        const categories = ['New', 'Other'];
        const wrapper = shallow(<GifExpertApp defaultCategories={ categories } />)

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );
    })
    
    
})
