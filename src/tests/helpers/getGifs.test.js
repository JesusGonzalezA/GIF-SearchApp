import { getGifs } from '../../helpers/getGifs'

describe('Helpers -> getGifs (Fetch)', () => {
    
    test('should fetch 10 elements', async () => {
        
        const gifs = await getGifs('New')

        expect( gifs.length ).toBe( 10 );
    })

    test('should be undefined if I dont send a category', async () => {
        
        const gifs = await getGifs('')
        
        expect( gifs ).toStrictEqual( [] );
    })
    
})
