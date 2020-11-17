//**************************************************************************
// Hooks to retrieve gifs and indicate how the loading process is going on
//**************************************************************************

import {useState, useEffect} from 'react'
import { getGifs } from '../helpers/getGifs';

//**************************************************************************
export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        images: [],
        loading: true
    });

    useEffect(() => {
        getGifs(category)
        .then(img => setState({
            images: img,
            loading: false
        })
        );
        

    }, [category])

    return state; 
}