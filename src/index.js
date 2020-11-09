/*##########################################################################
#  Main archive.                                                           #
#  It renders the application.                                             #
//########################################################################*/

//**************************************************************************
import React from 'react';
import ReactDOM from 'react-dom';
import GifExpertApp from './GifExpertApp'

import './styles/index.css';
import './styles/icons.css'
//**************************************************************************

ReactDOM.render(
    <GifExpertApp />,
    document.getElementById('root')
);

//--------------------------------------------------------------------------

