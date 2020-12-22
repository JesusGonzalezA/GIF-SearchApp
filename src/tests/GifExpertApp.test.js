import { shallow } from "enzyme"
import React from 'react'
import GifExpertApp from '../GifExpertApp'

describe('GifExpertApp', () => {
    
    const wrapper = shallow(<GifExpertApp />)

    test('should match with the snapshot', () => {
        expect(wrapper).toMatchSnapshot(); 
    })
    
})
