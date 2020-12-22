/*##########################################################################
#  Main React Component                                                    #
//########################################################################*/

//**************************************************************************

import React, {useState} from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

//**************************************************************************

const GifExpertApp = ( {defaultCategories = [] }) => {

    const [categories, setCategories] = useState(defaultCategories);
    

    return (
        <>
            <header>
                <h1>GifExpertApp</h1>
                <hr />
            </header>
           
            <AddCategory setCategories= {setCategories} />

            <ol>
                {
                    categories.map(category => 
                        <GifGrid 
                            key={category}
                            category={category} 
                        />
                    )
                }
            </ol>
            
        </>
    );
}

//**************************************************************************
export default GifExpertApp;