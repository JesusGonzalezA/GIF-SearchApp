import { shallow } from "enzyme"
import React from 'react'
import {AddCategory} from '../../components/AddCategory'
import '@testing-library/jest-dom'

describe('Components -> AddCategory', () => {
    
    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={setCategories}/>);
    const input = wrapper.find('input');

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={setCategories}/>);
    });

    test('should show the component correctly', () => {        
        expect(wrapper).toMatchSnapshot();
    })

    test('should change the input', () => {
        
        const value = 'Hola mundo'

        input.simulate('change', {
            target:
            {
                value: value
            }
        });
    })

    test('shouldnt post the information if it is empty', () => {

        wrapper.find('form').simulate('submit', {
            preventDefault () {

            }
        })

        expect(setCategories).not.toHaveBeenCalled();
    })
    
    
    
})
