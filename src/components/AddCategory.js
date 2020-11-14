/*##########################################################################
#  Component to add elements in the list                                   #
//########################################################################*/

//**************************************************************************

import React, {useState} from 'react'
import PropTypes from 'prop-types';

//**************************************************************************

export const AddCategory = ( {setCategories} ) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue( e.target.value )
    }

    const handleSubmit = (e) => {
        e.preventDefault();   

        if ( (inputValue.trim()).length) {
            
            setCategories(ctg => [...ctg, inputValue]);         
            setInputValue(''); 
        }
    }

    return (
        <form onSubmit={ handleSubmit} >     
            <input 
                type="text" 
                value={inputValue}
                onChange= {handleInputChange}
                placeholder="Insert a new categorie"
            />

            <button onClick={handleSubmit} > Insert </button>   
        </form>
    )
}

//**************************************************************************
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

AddCategory.defaultProps = {
}
//**************************************************************************

export default AddCategory;
