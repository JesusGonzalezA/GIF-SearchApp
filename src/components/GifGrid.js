/*##########################################################################
#  Grid of gifs                                                            #
//########################################################################*/

//**************************************************************************

import React from 'react'
import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

//**************************************************************************

export const GifGrid = ( {category} ) => {

    //--------------------------------------------------------------------------
    const { images, loading } = useFetchGifs(category);

    //--------------------------------------------------------------------------
    
   
    //--------------------------------------------------------------------------
    return (
        <div class='category'>  
            <h2>{category}</h2>
            
            <div className='gifgrid'>
                {loading && <div className='preloader'></div>}
                {
                   images.map( (img) => (
                        <GifGridItem
                            key={img.id} 
                            {...img}
                        />
                    ))
                }
            </div>
        </div>
    )
    //--------------------------------------------------------------------------
}

//**************************************************************************
GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}
//**************************************************************************
export default GifGrid;