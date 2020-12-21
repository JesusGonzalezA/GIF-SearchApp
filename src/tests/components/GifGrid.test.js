import { shallow } from "enzyme"
import React from 'react'
import GifGrid from "../../components/GifGrid"
import {useFetchGifs} from "../../hooks/useFetchGifs" 
jest.mock("../../hooks/useFetchGifs")

describe('Components -> GifGrid', () => {
    
    const category = "New"
    
    test('should match with the snapshot', () => {
        
        useFetchGifs.mockReturnValue({
            images: [],
            loading: true
        })
        const wrapper = shallow(<GifGrid category={category} />)
        
        expect(wrapper).toMatchSnapshot();
    })

    test('should show items when it is loaded', () => {
        
        const images = [{
            id: 'ExampleId',
            url: 'https://localhost/example.gif',
            title: "Example"
        }] 

        useFetchGifs.mockReturnValue({
            images: [],
            loading: false
        })
        const wrapper = shallow(<GifGrid category={category} />)

        expect(wrapper).toMatchSnapshot();
    })
    
    
})
