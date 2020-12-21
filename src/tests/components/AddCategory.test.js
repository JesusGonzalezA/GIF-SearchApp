import { shallow } from "enzyme"
import React from 'react'
import {AddCategory} from '../../components/AddCategory'

describe('Components -> AddCategory', () => {
    
    const setCategories = () => {};
    const wrapper = shallow( <AddCategory setCategories={setCategories}/>);

    test('should show the component correctly', () => {        
        expect(wrapper).toMatchSnapshot();
    })

    test('should change the input', () => {
        
        const input = wrapper.find('input');
        const value = 'Hola mundo'

        input.simulate('change', {
            target:
            {
                value: value
            }
        });
    })
    
    
})
