/*##########################################################################
#  Grid of gifs                                                            #
//########################################################################*/

//**************************************************************************

import React, {useState, useEffect } from 'react'
import PropTypes from 'prop-types';

//**************************************************************************

export const GifGrid = ( {category} ) => {

    //--------------------------------------------------------------------------
    const [images, setImages] = useState([]);

    //--------------------------------------------------------------------------
    useEffect(() => {
        getGifs();
    }, [])

    //--------------------------------------------------------------------------
    const getGifs = async() => {

        const endpoint  = 'https://api.giphy.com/v1/gifs/search?'

        //Params
        const limit = 10;
        const queryApiKey = 'api_key=9jplbxKhPdDDXYnbjKuZ2NFJPVPnmUeW';
        const theme = category;

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
        
        //Actualizar las imágenes
        setImages(gifs);
    }
   
    //--------------------------------------------------------------------------
    return (
        <>
            <h2>{category}</h2>
            <ol>
                {
                    images.map( ({id, title}) => (
                        <li key={id}> 
                            {title.trim()===''? 'Without title' : title} 
                        </li>
                    ))
                }
            </ol>
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