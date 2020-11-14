/*##########################################################################
#  Grid of gifs                                                            #
//########################################################################*/

//**************************************************************************

import React, {useState} from 'react'
import PropTypes from 'prop-types';

//**************************************************************************

export const GifGrid = ( {category} ) => {

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
        
    }

    return (
        <>
            <h2>{category}</h2>
        </>
    )
}

//**************************************************************************
GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}
//**************************************************************************
export default GifGrid;