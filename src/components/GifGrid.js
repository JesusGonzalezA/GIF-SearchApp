/*##########################################################################
#  Grid of gifs                                                            #
//########################################################################*/

//**************************************************************************

import React, {useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import GifGridItem from './GifGridItem';

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
            {
                images.map( (img) => (
                   <ol>
                    <GifGridItem
                        key={img.id} 
                        {...img}
                    />
                   </ol> 
                     
                ))
            }
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