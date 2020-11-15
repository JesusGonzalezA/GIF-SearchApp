/*##########################################################################
#  Grid of gifs                                                            #
//########################################################################*/

//**************************************************************************

import React, {useState, useEffect } from 'react'
import PropTypes from 'prop-types';

//**************************************************************************

export const GifGrid = ( {category} ) => {

    //--------------------------------------------------------------------------
    const [count, setCount] = useState(0);

    //--------------------------------------------------------------------------
    const getGifs = async() => {

        const endpoint  = 'https://api.giphy.com/v1/gifs/search?'

        //Params
        const limit = 10;
        const queryApiKey = 'api_key=9jplbxKhPdDDXYnbjKuZ2NFJPVPnmUeW';
        const theme = 'cheese';

        //URL    
        const queryLimit = 'limit=' + limit;
        const queryTheme = 'q=' + theme;
        const url = `${endpoint}${queryLimit}&&${queryTheme}&&${queryApiKey}`;
        const resp = await fetch(url);
        const {data} = await resp.json();

        //Gifs
        const gifs = data.map  (img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        })
        
        console.log(gifs);
    }
    //--------------------------------------------------------------------------
    useEffect(() => {
        getGifs();
    }, [])
    //--------------------------------------------------------------------------
    return (
        <>
            <h2>{category}</h2>
            <h3>{count}</h3>
            <button onClick={()=>setCount(count+1)}></button>
        </>
    )
    //--------------------------------------------------------------------------
}

//**************************************************************************
GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}
//**************************************************************************
export default GifGrid;