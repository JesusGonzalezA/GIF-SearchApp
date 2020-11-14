/*##########################################################################
#  Main React Component                                                    #
//########################################################################*/

//**************************************************************************

import React, {useState} from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

//**************************************************************************

const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);
    

    return (
        <>
            <header>
                <h1>GifExpertApp</h1>
                <hr />
            </header>
           
            <AddCategory setCategories= {setCategories} />

            <div id="list">
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
            </div>
            
        </>
    );
}

//**************************************************************************
export default GifExpertApp;