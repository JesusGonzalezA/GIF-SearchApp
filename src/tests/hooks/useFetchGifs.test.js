import { renderHook } from "@testing-library/react-hooks"
import React from 'react'
import {useFetchGifs} from "../../hooks/useFetchGifs" 

describe('Hooks -> useFetchGifs', () => {
    
    test('should return the initial state', () => {
        
        const { result } = renderHook( () => useFetchGifs('') );
        const { images, loading } = result.current;

        expect( images ).toStrictEqual( [] );
        expect( loading ).toBe( true )
    })
    
})
