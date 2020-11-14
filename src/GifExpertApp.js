/*##########################################################################
#  Main React Component                                                    #
//########################################################################*/

//**************************************************************************

import React, {useState} from 'react';
import AddCategory from './components/AddCategory';

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
                        categories.map(category => {
                            return <li key={category}> {category} </li>
                        })
                    }
                </ol>
            </div>
            
        </>
    );
}

//**************************************************************************
export default GifExpertApp;