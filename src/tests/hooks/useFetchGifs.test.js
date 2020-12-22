import { waitFor } from "@testing-library/react"
import { renderHook } from "@testing-library/react-hooks"
import React from 'react'
import {useFetchGifs} from "../../hooks/useFetchGifs" 

describe('Hooks -> useFetchGifs', () => {
    
    test('should return the initial state', async () => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('') );
        const { images, loading } = result.current;
        await waitForNextUpdate();

        expect( images ).toStrictEqual( [] );
        expect( loading ).toBe( true )
    })

    test('should return an array and false', async () => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Example') );
        await waitForNextUpdate();
        const { images, loading } = result.current;

        expect( images.length ).toBe( 10 );
        expect( loading ).toBe( false );
    })
    
    
})
