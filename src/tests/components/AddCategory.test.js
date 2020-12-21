import { shallow } from "enzyme"
import React from 'react'
import {AddCategory} from '../../components/AddCategory'
import '@testing-library/jest-dom'

describe('Components -> AddCategory', () => {
    
    const setCategories = jest.fn();

    // Auxiliar vars
    let wrapper = shallow( <AddCategory setCategories={setCategories}/>);
    const input = wrapper.find('input');

    // Auxiliar functions
    const simulateSubmit = () => {
        wrapper.find('form').simulate('submit', {
            preventDefault () {

            }
        })
    }
    const simulateInputChange = () => {
        const value = 'Hola mundo'

        input.simulate('change', {
            target:
            {
                value: value
            }
        });
    }

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={setCategories}/>);
    });

    test('should show the component correctly', () => {        
        expect(wrapper).toMatchSnapshot();
    })

    test('shouldnt post the information if it is empty', () => {

        simulateSubmit();

        expect(setCategories).not.toHaveBeenCalled();
    })

    test('should clean the input after it is submitted', () => {
        
        simulateInputChange();
        simulateSubmit();
        expect(input.prop('value')).toBe('')
    })
    
    
    
    
})
